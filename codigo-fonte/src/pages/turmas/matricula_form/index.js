
import { turmaEntityService } from '@/services/turmaEntityService.service';
import { studentEntityService } from '@/services/studentEntityService.service';
import { registrationEntityService } from '@/services/registrationEntity.service';
import { useDashboardUtils } from '@/hooks/useDashboardUtils';
import { useDOMManager } from '/src/hooks/useDOMManager.js';
import { faker } from '@faker-js/faker';
import { navigateToRoute } from '@/router';
import './index.css';

let started = false;

async function startRegistrationModule() {
    started = true;

    const { showNotification } = useDashboardUtils();
    const { createRegistrationList } = useDOMManager();
    const formWrapper = document.querySelector('.form-wrapper');
    const studentWrapper = document.querySelector('.student-lista-wrapper');
    const loadingWrapper = document.querySelector('.loading-wrapper');

    const turmaID = window.location.href.split('/').pop();
    const { data: turma } = await turmaEntityService.getByCode(turmaID);

    const nomeNode = document.querySelector('#nomeMateria');
    const yearNode = document.querySelector('#period');
    const responsibleNode = document.querySelector('#nomeProfessor');
    const dateNode = document.querySelector('#data');

    nomeNode.innerHTML = '';
    yearNode.innerHTML = '';
    responsibleNode.innerHTML = '';
    dateNode.innerHTML = '';

    nomeNode.textContent = turma.nome;
    yearNode.textContent = 'Período: ' + turma.semestre;
    responsibleNode.textContent = 'Responsável: ' + turma.professor;
    dateNode.textContent = 'Data: ' + new Date().toLocaleDateString();

    const { data: studentCollection } = await studentEntityService.getAll();
    const { data: registrationCollection } = await registrationEntityService.getAll();

    const filteredCollection = [...studentCollection].filter((aluno) => {
        const find = [...registrationCollection].find((matricula) => (matricula.aluno_id === aluno.id) && (matricula.turma_id == turmaID));

        if (find) return false;

        return true;
    });

    if (!filteredCollection.length) {
        formWrapper.textContent = 'Nenhum aluno disponível para esta turma';
    } else {
        const list = createRegistrationList(filteredCollection);

        studentWrapper.innerHTML = '';
        studentWrapper.appendChild(list);

        const rows = list.querySelectorAll('li');

        rows.forEach((row) => {
            const buttonAction = document.createElement('button');
            const actionsWrapper = row.querySelector('.actions');

            const alunoID = row.getAttribute('data-id');
            const alunoName = row.getAttribute('data-name');
            const alunoCPF = row.getAttribute('data-cpf');
            buttonAction.classList.add('btn');
            buttonAction.classList.add('btn-primary');
            buttonAction.textContent = 'Matricular';

            buttonAction.addEventListener('click', async (event) => {
                event.preventDefault();

                try {
                    buttonAction.setAttribute('disabled', 'disabled');
                    buttonAction.textContent = 'Carregando...'

                    const payload = {
                        turma_id: turmaID,
                        aluno_id: alunoID,
                        aluno_cpf: alunoCPF,
                        turma_nome: turma.nome,
                        aluno_name: alunoName,
                    };

                    payload.id = faker.string.uuid();
                    payload.created_at = new Date().toISOString();
                    payload.active = true;

                    const response = await registrationEntityService.create(payload);

                    showNotification({ 
                        type: 'success', 
                        title: 'Sucesso', 
                        message: 'Aluno matriculado com sucesso'
                    });

                    navigateToRoute(null, '/turmas/matricula');
                } catch (error) {
                    buttonAction.setAttribute('disabled', '');
                }
                
            });

            actionsWrapper.appendChild(buttonAction);
        });
    }

    loadingWrapper.classList.add('hidden');
    formWrapper.classList.remove('hidden');
}

export default {
    init() {
        startRegistrationModule();

        window.addEventListener('changepage', function(event) {
            if (started) {
                return;
            }

            startRegistrationModule();
        });
    }
}
