
import { turmaEntityService } from '@/services/turmaEntityService.service';
import { registrationEntityService } from '@/services/registrationEntity.service';
import { gradeEntityService } from '@/services/gradeEntity.service';
import { useDashboardUtils } from '@/hooks/useDashboardUtils';
import { navigateToRoute } from '@/router';
import { faker } from '@faker-js/faker';
import './index.css';

let started = false;

function createFormStudentList(collection = [], wrapper = null) {
    if (wrapper) {
        collection.forEach((matricula, index) => {
            const row = document.createElement('form');
            const nameNode = document.createElement('div');
            const notaTrabalhoNode = document.createElement('div');
            const notaProvaNode = document.createElement('div');

            const notaTrabalhoRadioNode = document.createElement('input');
            const notaProvaRadioNode = document.createElement('input');
    
            const notaTrabalhoLabelNode = document.createElement('label');
            const notaProvaLabelNode = document.createElement('label');
    
            nameNode.textContent = matricula.aluno_name;
            nameNode.classList.add('font-bold');
    
            notaTrabalhoRadioNode.setAttribute('type', 'number');
            notaTrabalhoRadioNode.setAttribute('id', 'notaTrabalho_' + index);
            notaTrabalhoRadioNode.setAttribute('name', 'nota-trabalho');
            notaTrabalhoRadioNode.setAttribute('min', '0');
            notaTrabalhoRadioNode.setAttribute('max', '10');

    
            notaProvaRadioNode.setAttribute('type', 'number');
            notaProvaRadioNode.setAttribute('id', 'notaProva_' + index);
            notaProvaRadioNode.setAttribute('name', 'nota-prova');
            notaProvaRadioNode.setAttribute('min', '0');
            notaProvaRadioNode.setAttribute('max', '10');

    
            notaTrabalhoLabelNode.setAttribute('for', 'notaTrabalho_' + index);
            notaTrabalhoLabelNode.setAttribute('class', 'labelNotaTrabalho');
            notaTrabalhoLabelNode.textContent = 'Nota Trabalho';
    
            notaProvaLabelNode.setAttribute('for', 'notaProva_' + index);
            notaProvaLabelNode.setAttribute('class', 'labelNotaProva');
            notaProvaLabelNode.textContent = 'Nota Prova';
    
            notaTrabalhoNode.appendChild(notaTrabalhoRadioNode);
            notaTrabalhoNode.appendChild(notaTrabalhoLabelNode);
    
            notaProvaNode.appendChild(notaProvaRadioNode);
            notaProvaNode.appendChild(notaProvaLabelNode);
            
            row.classList.add('row');
            row.setAttribute('data-aluno-id', matricula.aluno_id);
            row.setAttribute('data-aluno-name', matricula.aluno_name);
            row.setAttribute('data-aluno-cpf', matricula.aluno_cpf);
            row.setAttribute('nota-trabalho', matricula.notaTrabalhoRadioNode);
            row.setAttribute('nota-prova', matricula.notaProvaRadioNode);
    
            row.appendChild(nameNode);
            row.appendChild(notaTrabalhoNode);
            row.appendChild(notaProvaNode);
    
            wrapper.appendChild(row);
        });
    }
}

function checkIfGradeExists(collection, id) {
    const currentDate = new Date().toISOString().slice(0,10);
    return [...collection].find((_) => (_.data.slice(0,10) == currentDate) && id == _.turma_id);
}

async function startAttendanceModule() {
    started = true;

    const { showNotification } = useDashboardUtils();
    const formWrapper = document.querySelector('.form-wrapper');
    const loadingWrapper = document.querySelector('.loading-wrapper');
    const turmaID = window.location.href.split('/').pop();
    const { data: turma } = await turmaEntityService.getByCode(turmaID);
    const nomeNode = document.querySelector('#nota-nome');
    const yearNode = document.querySelector('#nota-ano');
    const responsibleNode = document.querySelector('#nota-responsavel');
    const dateNode = document.querySelector('#data');
    const buttonSubmit = formWrapper.querySelector('button[type=submit]');

    nomeNode.innerHTML = '';
    yearNode.innerHTML = '';
    responsibleNode.innerHTML = '';
    dateNode.innerHTML = '';

    nomeNode.textContent = 'Turma: ' + turma.nome;
    yearNode.textContent = 'Período: ' + turma.semestre;
    responsibleNode.textContent = 'Responsável: ' + turma.professor;
    dateNode.textContent = 'Data: ' + new Date().toLocaleDateString();

    const { data: registrationCollection} = await registrationEntityService.getAll();
    const { data: gradeCollection } = await gradeEntityService.getAll();
    const filteredCollection = registrationCollection.filter((registration) => registration.turma_id === turmaID && registration.active);

    const formBody = formWrapper.querySelector('.form .body');
    formBody.innerHTML = '';

    if (!filteredCollection.length) {
        formBody.textContent = 'Nenhum aluno disponível';
        buttonSubmit.setAttribute('disabled', 'disabled');
    } else {
        createFormStudentList(filteredCollection, formBody);
    }

    loadingWrapper.classList.add('hidden');
    formWrapper.classList.remove('hidden');

    const formRows = formBody.querySelectorAll('.row');

    formRows.forEach((row, index) => {
        const alunoID = row.getAttribute('data-aluno-id');
        const currentDate = new Date().toISOString().slice(0,10);
        const find = [...gradeCollection].find((_) => {
            return (_.aluno_id === alunoID) && (_.data.slice(0,10) == currentDate) && turma.id == _.turma_id;
        });
    });

    const check = checkIfGradeExists(gradeCollection, turma.id);
    buttonSubmit.textContent = check ? 'Atualizar notas' : 'Lançar notas';

    buttonSubmit.addEventListener('click', async (event) => {
        event.preventDefault();

        buttonSubmit.setAttribute('disabled', 'disabled');

        const payloads = [];
        const rows = formBody.querySelectorAll('.row');

        rows.forEach((row) => {
            const alunoID = row.getAttribute('data-aluno-id');
            const alunoName = row.getAttribute('data-aluno-name');
            const alunoCPF = row.getAttribute('data-aluno-cpf');
            const notaTrabalhoInput = row.querySelector(`input[name="nota-trabalho"]`).value;
            const notaProvaInput = row.querySelector(`input[name="nota-prova"]`).value;
            const somaNotasAluno = parseFloat(notaTrabalhoInput) + parseFloat(notaProvaInput);
            const mediaSoma = 14;
            const situacaoAluno = +parseFloat(somaNotasAluno) >= +parseFloat(mediaSoma) ? "Aprovado" : "Reprovado";

            console.log(notaTrabalhoInput);
            console.log(notaProvaInput);
            console.log(somaNotasAluno);
            console.log(situacaoAluno);

            const payload = {
                aluno_id: alunoID,
                aluno_name: alunoName,
                aluno_cpf: alunoCPF,
                turma_id: turma.id,
                turma_name: turma.nome,
                data: new Date().toISOString(),
                nota_trabalho: notaTrabalhoInput,
                nota_prova: notaProvaInput,
                situacao_aluno: situacaoAluno,
            };
            payload.id = faker.string.uuid();
            payload.created_at = new Date().toISOString();
            payload.active = true;

            payloads.push(payload);
        });

        const createPromises = payloads.map(payload => gradeEntityService.create(payload));
        const updatePromises = gradeCollection.map((item, index) => gradeEntityService.update(item.id, payloads[index]));

        if (check) {
            await Promise.all(createPromises);
        } else {
            await Promise.all(updatePromises);
        }

        showNotification({ 
            type: 'success', 
            title: 'Sucesso', 
            message: check ? 'Notas atualizadas com sucesso' : 'Notas cadastradas com sucesso'
        });

        navigateToRoute(null, '/turmas/notas/lista');
    });

}

export default {
    init() {
        startAttendanceModule();

        window.addEventListener('changepage', function(event) {
            if (started) {
                return;
            }

            startAttendanceModule();
        });
    }
}
