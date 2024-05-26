
import { turmaEntityService } from '@/services/turmaEntityService.service';
import { registrationEntityService } from '@/services/registrationEntity.service';
import { frequencyEntityService } from '@/services/frequencyEntity.service';
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
            const presencaNode = document.createElement('div');
            const ausenciaNode = document.createElement('div');
            const justificadoNode = document.createElement('div');
    
            const presencaRadioNode = document.createElement('input');
            const ausenciaRadioNode = document.createElement('input');
            const justificadoRadioNode = document.createElement('input');
    
            const presencaLabelNode = document.createElement('label');
            const ausenciaLabelNode = document.createElement('label');
            const justificadoLabelNode = document.createElement('label');
    
            nameNode.textContent = matricula.aluno_name;
            nameNode.classList.add('font-bold');
    
            presencaRadioNode.setAttribute('type', 'radio');
            presencaRadioNode.setAttribute('id', 'presenca_' + index);
            presencaRadioNode.setAttribute('name', 'frequency');
            presencaRadioNode.setAttribute('value', 'P');
            presencaRadioNode.classList.add('hidden');
    
            ausenciaRadioNode.setAttribute('type', 'radio');
            ausenciaRadioNode.setAttribute('id', 'ausencia_' + index);
            ausenciaRadioNode.setAttribute('name', 'frequency');
            ausenciaRadioNode.setAttribute('value', 'F');
            ausenciaRadioNode.classList.add('hidden');
    
            justificadoRadioNode.setAttribute('type', 'radio');
            justificadoRadioNode.setAttribute('id', 'justificado_' + index);
            justificadoRadioNode.setAttribute('name', 'frequency');
            justificadoRadioNode.setAttribute('value', 'J');
            justificadoRadioNode.classList.add('hidden');
    
            presencaLabelNode.setAttribute('for', 'presenca_' + index);
            presencaLabelNode.textContent = 'P';
    
            ausenciaLabelNode.setAttribute('for', 'ausencia_' + index);
            ausenciaLabelNode.textContent = 'F';
    
            justificadoLabelNode.setAttribute('for', 'justificado_' + index);
            justificadoLabelNode.textContent = 'J';
    
            presencaNode.appendChild(presencaRadioNode);
            presencaNode.appendChild(presencaLabelNode);
    
            ausenciaNode.appendChild(ausenciaRadioNode);
            ausenciaNode.appendChild(ausenciaLabelNode);
    
            justificadoNode.appendChild(justificadoRadioNode);
            justificadoNode.appendChild(justificadoLabelNode);
            
            row.classList.add('row');
            row.setAttribute('data-aluno-id', matricula.aluno_id);
            row.setAttribute('data-aluno-name', matricula.aluno_name);
            row.setAttribute('data-aluno-cpf', matricula.aluno_cpf);
    
            row.appendChild(nameNode);
            row.appendChild(presencaNode);
            row.appendChild(ausenciaNode);
            row.appendChild(justificadoNode);
    
            wrapper.appendChild(row);
        });
    }
}

function checkIfFrequencyExists(collection, id) {
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
    const nomeNode = document.querySelector('#nomeMateria');
    const yearNode = document.querySelector('#anoLetivo');
    const responsibleNode = document.querySelector('#nomeProfessor');
    const dateNode = document.querySelector('#data');
    const buttonSubmit = formWrapper.querySelector('button[type=submit]');

    nomeNode.innerHTML = '';
    yearNode.innerHTML = '';
    responsibleNode.innerHTML = '';
    dateNode.innerHTML = '';

    nomeNode.textContent = turma.nome;
    yearNode.textContent = 'Período: ' + turma.semestre;
    responsibleNode.textContent = 'Responsável: ' + turma.professor;
    dateNode.textContent = 'Data: ' + new Date().toLocaleDateString();

    const { data: registrationCollection} = await registrationEntityService.getAll();
    const { data: frequencyCollection } = await frequencyEntityService.getAll();
    const filteredCollection = registrationCollection.filter((registration) => registration.turma_id === turmaID);

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
        const find = [...frequencyCollection].find((_) => {
            return (_.aluno_id === alunoID) && (_.data.slice(0,10) == currentDate) && turma.id == _.turma_id;
        });
        
        if (find) {
            const status = find.status_aluno;

            const presencaLabelNode = row.querySelector(`label[for="presenca_${index}"]`);
            const ausenciaLabelNode = row.querySelector(`label[for="ausencia_${index}"]`);
            const justificadoLabelNode = row.querySelector(`label[for="justificado_${index}"]`);

            switch (status) {
                case 'P':
                    presencaLabelNode.click();
                    break;
                case 'F':
                    ausenciaLabelNode.click();
                    break;
                default:
                    justificadoLabelNode.click();
                    break;
            }
        }
    });

    const check = checkIfFrequencyExists(frequencyCollection, turma.id);
    buttonSubmit.textContent = check ? 'Atualizar frequência' : 'Lançar frequência';

    buttonSubmit.addEventListener('click', async (event) => {
        event.preventDefault();

        buttonSubmit.setAttribute('disabled', 'disabled');

        const payloads = [];
        const rows = formBody.querySelectorAll('.row');

        rows.forEach((row) => {
            const alunoID = row.getAttribute('data-aluno-id');
            const alunoName = row.getAttribute('data-aluno-name');
            const alunoCPF = row.getAttribute('data-aluno-cpf');
            const radios = row.querySelectorAll('input[type=radio]');
            const selectedRadio = Array.from(radios).find(radio => radio.checked);

            const checked = selectedRadio ? selectedRadio.value : 'F';
            const payload = {
                aluno_id: alunoID,
                aluno_name: alunoName,
                aluno_cpf: alunoCPF,
                turma_id: turma.id,
                turma_name: turma.nome,
                status_aluno: checked,
                data: new Date().toISOString(),
            };
            payload.id = faker.string.uuid();
            payload.created_at = new Date().toISOString();
            payload.active = true;

            payloads.push(payload);
        });

        const createPromises = payloads.map(payload => frequencyEntityService.create(payload));
        const updatePromises = frequencyCollection.map((item, index) => frequencyEntityService.update(item.id, payloads[index]));

        if (check) {
            await Promise.all(createPromises);
        } else {
            await Promise.all(updatePromises);
        }

        showNotification({ 
            type: 'success', 
            title: 'Sucesso', 
            message: check ? 'Dados atualizados com sucesso' : 'Dados cadastrados com sucesso'
        });

        navigateToRoute(null, '/turmas/frequencia/lista');
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
