import { turmaEntityService } from '@/services/turmaEntityService.service';
import { gradeEntityService } from '@/services/gradeEntity.service';
import { useDashboardUtils } from '@/hooks/useDashboardUtils';
import { navigateToRoute } from '@/router';
import './index.css';

let started = false;

function createFormStudentList(collection = [], wrapper = null) {
            
        collection.forEach((grade, index) => {

            const nameNode = document.getElementById('certificado-nome-aluno');
            nameNode.textContent = (grade.aluno_name);    
        })} ;

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
    const nomeNode = document.querySelector('#certificado-nome-turma');
    const yearNode = document.querySelector('#certificado-ano');
    const responsibleNode = document.querySelector('#certificado-professor');
    const dateNode = document.querySelector('#certificado-data');
     
    nomeNode.textContent = 'turma de ' + turma.nome;
    yearNode.textContent = 'período de ' + turma.semestre;
    responsibleNode.textContent = 'Professor(a): ' + turma.professor;
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
