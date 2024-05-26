
import { turmaEntityService } from '@/services/turmaEntityService.service';
import { useDOMManager } from '/src/hooks/useDOMManager.js';
import { navigateToRoute } from '@/router';
import './index.css';

let started = false;

async function startRegistrationModule() {
    started = true;

    const { createAttendanceList } = useDOMManager();

    const form = document.querySelector('.registration-page .registration-search-form');
    const wrapper = document.querySelector('.registration-page .lista-wrapper');
    const title = document.querySelector('.registration-page .attendance-empty-title');

    

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
                            const buttonAction = document.createElement('button');
                            buttonAction.classList.add('btn')
                            buttonAction.classList.add('btn-primary')
                            buttonAction.textContent = 'Matricular na turma';
                            elemento.appendChild(buttonAction);
                        });

                        const items = list.querySelectorAll('li');

                        items.forEach((elemento) => {
                            const buttonAction = elemento.querySelector('.actions');

                            buttonAction.addEventListener('click', (event) => {
                                const id = elemento.getAttribute('data-id');
                                event.preventDefault();

                                navigateToRoute(null, `/turmas/matricula/${id}`);
                            });
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
        startRegistrationModule();

        window.addEventListener('changepage', function(event) {
            if (started) {
                return;
            }

            startRegistrationModule();
        });
    }
}
