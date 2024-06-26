import { turmaEntityService } from '@/services/turmaEntityService.service';
import { gradeEntityService } from '@/services/gradeEntity.service';
import { useDashboardUtils } from '@/hooks/useDashboardUtils';
import { navigateToRoute } from '@/router';
import './index.css';

let started = false;

function createFormStudentList(collection = [], wrapper = null) {
            
        collection.forEach((grade, index) => {

            const nameNode = document.getElementById('declaracao-nome-aluno');
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
    const nomeNodeDeclaracao = document.querySelector('#declaracao-nome-turma');
    const yearNodeDeclaracao = document.querySelector('#declaracao-ano');
    const responsibleNodeDeclaracao = document.querySelector('#declaracao-professor');
    const dateNodeDeclaracao = document.querySelector('#declaracao-data');
     
    nomeNodeDeclaracao.textContent = 'turma de ' + turma.nome;
    yearNodeDeclaracao.textContent = 'durante o período de ' + turma.semestre;
    responsibleNodeDeclaracao.textContent = 'Professor(a): ' + turma.professor;
    dateNodeDeclaracao.textContent = 'Data: ' + new Date().toLocaleDateString();

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
