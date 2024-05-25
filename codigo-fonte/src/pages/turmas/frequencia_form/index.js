
import { turmaEntityService } from '@/services/turmaEntityService.service';
import { useDOMManager } from '/src/hooks/useDOMManager.js';
import { navigateToRoute } from '@/router';
import './index.css';

let started = false;

async function startAttendanceModule() {
    started = true;

    const formWrapper = document.querySelector('.form-wrapper');
    const loadingWrapper = document.querySelector('.loading-wrapper');

    const id = window.location.href.split('/').pop();
    const { data: turma } = await turmaEntityService.getByCode(id);

    const nomeNode = document.querySelector('#nomeMateria');
    const yearNode = document.querySelector('#anoLetivo');
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

    loadingWrapper.classList.add('hidden');
    formWrapper.classList.remove('hidden');

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
