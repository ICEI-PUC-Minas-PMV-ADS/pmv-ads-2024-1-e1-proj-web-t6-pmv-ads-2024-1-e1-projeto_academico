import { studentEntityService } from '/src/services/studentEntityService.service.js';
import { useDOMManager } from '/src/hooks/useDOMManager.js';

let started = false;

async function startStudentListModule() {
    started = true;

    const { createTable, createTableActions } = useDOMManager();

    const wrapper = document.querySelector('.aluno-lista-wrapper');

    if (wrapper) {
        if (document.querySelector('.loading')) {
            return false;
        }

        const loadingElement = document.createElement('div');
        loadingElement.classList.add('loading');
        

        loadingElement.innerHTML = 'Carregando...';

        wrapper.appendChild(loadingElement);

        const { data: collection } = await studentEntityService.getAll();

        const headers = [
            { label: 'Nome', key: 'nome' }, 
            { label: 'Email', key: 'email' }
        ];
        
        const tableElement = createTable(collection, headers);

        createTableActions(tableElement);

        const rows = tableElement.querySelectorAll('tbody tr');

        rows.forEach(row => {
            const id = row.getAttribute('data-id');

            const editButton = row.querySelector('.edit-button');
            const deleteButton = row.querySelector('.delete-button');

            if (editButton) {
                editButton.addEventListener('click', (event) => {
                    event.preventDefault();

                    navigateToRoute(null, `/aluno/editar/${id}`);
                })
            }

            if (deleteButton) {
                deleteButton.addEventListener('click', (event) => {
                    event.preventDefault();

                    console.log('delete');
                })
            }
        });
        
        loadingElement.remove();    
        wrapper.appendChild(tableElement);
    }
}

import './index.css';
import { navigateToRoute } from '@/router';

export default {
    init() {
        if (started) {
            return;
        }

        startStudentListModule();

        window.addEventListener('changepage', function(event) {
            startStudentListModule();
        });
    }
}

