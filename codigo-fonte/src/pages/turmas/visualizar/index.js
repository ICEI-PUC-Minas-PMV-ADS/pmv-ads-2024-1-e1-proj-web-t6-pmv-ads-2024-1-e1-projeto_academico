
import { turmaEntityService } from '@/services/turmaEntityService.service';
import { useDOMManager } from '/src/hooks/useDOMManager.js';
import { navigateToRoute } from '@/router';
import './index.css';

let started = false;

async function startClassroomModule() {
    started = true;

    const { createAttendanceList } = useDOMManager();

    const form = document.querySelector('.classroom-page .classroom-search-form');
    const wrapper = document.querySelector('.classroom-page .lista-wrapper');
    const title = document.querySelector('.classroom-page .classroom-empty-title');

    

    if (form && wrapper) {
        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            if (document.querySelector('.loading')) {
                return false;
            }

            const inputSearch = form.querySelector('input[type=search]');

            if (inputSearch) {
                const query = inputSearch.value;
                
                if (query.length) {
                    wrapper.innerHTML = '';
                    const loadingElement = document.createElement('div');
                    loadingElement.classList.add('loading');
                    loadingElement.innerHTML = 'Carregando...';
                    wrapper.append(loadingElement);

                    const { data: classRoomCollection } = await turmaEntityService.getAll();

                    const filtered = [...classRoomCollection].filter((_) => {
                        return _.nome.toLowerCase().includes(query.toLowerCase());
                    });

                    if (!filtered.length) {
                        wrapper.innerHTML = '';
                        wrapper.append(title);
                        alert('Não foram encontrados resultados para a pesquisa.');
                    } else {
                        const list = createAttendanceList(filtered);
                        const rows = list.querySelectorAll('.actions');
                        
                        rows.forEach(elemento => {
                            const buttonEdit = document.createElement('button');
                            buttonEdit.classList.add('btn');
                            buttonEdit.classList.add('btn-primary');
                            buttonEdit.textContent = 'Editar';

                            const buttonInactive = document.createElement('button');
                            buttonInactive.classList.add('btn')
                            buttonInactive.classList.add('btn-danger')
                            buttonInactive.textContent = 'Desativar';
                            elemento.appendChild(buttonEdit);
                            elemento.appendChild(buttonInactive);
                        });

                        loadingElement.remove();    
                        wrapper.appendChild(list);
                    }
                }
            }
        });
    }
}

export default {
    init() {
        startClassroomModule();

        window.addEventListener('changepage', function(event) {
            if (started) {
                return;
            }

            startClassroomModule();
        });
    }
}
