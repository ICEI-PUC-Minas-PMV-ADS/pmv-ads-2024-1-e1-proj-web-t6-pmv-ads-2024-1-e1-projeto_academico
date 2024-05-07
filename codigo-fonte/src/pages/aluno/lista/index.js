import { studentEntityService } from '/src/services/studentEntityService.service.js';
import { useDOMManager } from '/src/hooks/useDOMManager.js';
import { useDashboardUtils } from '@/hooks/useDashboardUtils';
import { navigateToRoute } from '@/router';
import './index.css';

let started = false;

async function startStudentListModule() {
    started = true;

    const { createTable, createTableActions } = useDOMManager();
    const { showNotification } = useDashboardUtils();

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
            const activeButton = row.querySelector('.active-button');

            if (editButton) {
                editButton.addEventListener('click', (event) => {
                    event.preventDefault();

                    // Redireciona para a tela de edição
                    navigateToRoute(null, `/aluno/editar/${id}`);
                })
            }

            if (deleteButton) {
                deleteButton.addEventListener('click', async (event) => {
                    event.preventDefault();

                    // deve desativar o aluno
                    await studentEntityService.delete(id);

                    showNotification({ 
                        type: 'success', 
                        title: 'Sucesso', 
                        message: 'Aluno desativado com sucessso'
                    });

                    navigateToRoute(null, `/aluno/lista/`);
                })
            }

            if (activeButton) {
                activeButton.addEventListener('click', async (event) => {
                    event.preventDefault();

                    // deve reactivar o aluno
                    await studentEntityService.activate(id);

                    showNotification({ 
                        type: 'success', 
                        title: 'Sucesso', 
                        message: 'Aluno reativado com sucessso'
                    });

                    navigateToRoute(null, `/aluno/lista/`);
                })
            }
        });
        
        loadingElement.remove();    
        wrapper.appendChild(tableElement);
    }
}



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

