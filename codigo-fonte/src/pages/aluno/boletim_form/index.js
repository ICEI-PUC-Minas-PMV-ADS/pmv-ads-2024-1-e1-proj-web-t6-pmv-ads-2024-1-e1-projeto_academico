import { turmaEntityService } from '@/services/turmaEntityService.service';
import { gradeEntityService } from '@/services/gradeEntity.service';
import { useDashboardUtils } from '@/hooks/useDashboardUtils';
import { navigateToRoute } from '@/router';
import './index.css';

let started = false;

function createFormStudentList(collection = [], wrapper = null) {
    if (wrapper) {
        collection.forEach((grade, index) => {
            const row = document.createElement('form');
            const nameNode = document.createElement('div');
            const notaTrabalhoLabel = document.createElement('div');
            const notaProvaLabel = document.createElement('div');
            const notaTrabalhoNode = document.createElement('div');
            const notaProvaNode = document.createElement('div');
            
            nameNode.textContent = ('Nome do Aluno: ' + grade.aluno_name);
            notaTrabalhoLabel.textContent = 'Nota Trabalho';
            notaTrabalhoNode.textContent = (grade.nota_trabalho);
            console.log(grade.nota_trabalho)
            notaProvaLabel.textContent = 'Nota Prova';
            notaProvaNode.textContent = (grade.nota_prova);
            console.log(grade.nota_prova)

            notaTrabalhoNode.setAttribute('id','nota-trabalho')
            notaProvaNode.setAttribute('id','nota-prova')
            notaTrabalhoLabel.setAttribute('id','nota-trabalho-label')
            notaProvaLabel.setAttribute('id','nota-prova-label')
            nameNode.setAttribute('id','texto-principal-form');

            row.classList.add('row');   
    
            row.appendChild(nameNode);
            row.appendChild(notaTrabalhoLabel);
            row.appendChild(notaTrabalhoNode);
            row.appendChild(notaProvaLabel);
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

    const formWrapper = document.querySelector('.form-wrapper');
    const loadingWrapper = document.querySelector('.loading-wrapper');
    const turmaID = window.location.href.split('/').pop();
    const { data: turma } = await turmaEntityService.getByCode(turmaID);
    const nomeNode = document.querySelector('#nota-nome');
    const yearNode = document.querySelector('#nota-ano');
    const responsibleNode = document.querySelector('#nota-responsavel');
    const dateNode = document.querySelector('#data');
    
    nomeNode.innerHTML = '';
    yearNode.innerHTML = '';
    responsibleNode.innerHTML = '';
    dateNode.innerHTML = '';

    nomeNode.textContent = 'Turma: ' + turma.nome;
    yearNode.textContent = 'Período: ' + turma.semestre;
    responsibleNode.textContent = 'Responsável: ' + turma.professor;
    dateNode.textContent = 'Data: ' + new Date().toLocaleDateString();

    const { data: gradeCollection } = await gradeEntityService.getAll();
    const filteredCollection = gradeCollection.filter((grade) => grade.turma_id === turmaID && grade.active);

    const formBody = formWrapper.querySelector('.form .body');
    formBody.innerHTML = '';

    if (!filteredCollection.length) {
        formBody.textContent = 'Nenhum aluno disponível';
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
