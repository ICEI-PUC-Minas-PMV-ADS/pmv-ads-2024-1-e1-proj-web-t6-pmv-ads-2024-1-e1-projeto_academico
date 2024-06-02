
import { registrationEntityService } from '@/services/registrationEntity.service';
import { useDashboardUtils } from '@/hooks/useDashboardUtils';
import { useDOMManager } from '/src/hooks/useDOMManager.js';
import './index.css';

let started = false;

async function startCancelRegistrationModule() {
    started = true;

    const { createCancelRegistrationList } = useDOMManager();

    const form = document.querySelector('.registration-search-form');
    const wrapper = document.querySelector('.cancelamento_matricula_wrapper');
    const listWrapper = document.querySelector('.lista-wrapper');
    const emptyWrapper = document.querySelector('.cancelamento_matricula_empty');
    const { showNotification } = useDashboardUtils();

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
                    const loadRegistration = async () => {
                        emptyWrapper.innerHTML = '';
                        listWrapper.innerHTML = '';
                        wrapper.classList.add('hidden');
                        emptyWrapper.classList.remove('hidden');

                        const loadingElement = document.createElement('div');
                        loadingElement.classList.add('loading');
                        loadingElement.innerHTML = 'Carregando...';
                        emptyWrapper.append(loadingElement);
                        const title = document.createElement('h3');
                        title.textContent = 'Utilize a pesquisa acima para encontrar aluno';

                        const { data: registrationCollection } = await registrationEntityService.getAll();

                        const filteredCollection = [...registrationCollection].filter((matricula) => {
                            return matricula.aluno_cpf == query;
                        });

                        if (!filteredCollection.length) {
                            alert('Nenhum resultado encontrado');
                            emptyWrapper.innerHTML = '';
                            emptyWrapper.append(title);
                        } else {
                            const nomeAluno = [...filteredCollection].reduce((acc, curr) => {
                                acc = curr.aluno_name;
                                return acc;
                            }, '');

                            const nomeWrapper = document.querySelector('.cancelamento_matricula .nome_aluno');
                            nomeWrapper.innerHTML = '';
                            nomeWrapper.textContent = 'Aluno: ' + nomeAluno;

                            const list = createCancelRegistrationList(filteredCollection);

                            const rows = list.querySelectorAll('li');

                            rows.forEach((row) => {
                                const actions = row.querySelector('.actions');
                                const id = row.getAttribute('data-id');
                                const active = JSON.parse(row.getAttribute('data-active'));

                                const deleteButtonAction = document.createElement('button');
                                deleteButtonAction.textContent = 'Cancelar matrícula';
                                deleteButtonAction.classList.add('btn');
                                deleteButtonAction.classList.add('btn-danger');

                                deleteButtonAction.addEventListener('click', async (event) => {
                                    event.preventDefault();

                                    deleteButtonAction.setAttribute('disabled', 'disabled');
                                    deleteButtonAction.textContent = 'Carregando...';

                                    await registrationEntityService.update(id, { active: false });

                                    showNotification({ 
                                        type: 'success', 
                                        title: 'Sucesso', 
                                        message: 'Matricula cancelada com sucesso'
                                    });

                                    loadRegistration();
                                });

                                const activateButtonAction = document.createElement('button');
                                activateButtonAction.textContent = 'Ativar matrícula';
                                activateButtonAction.classList.add('btn');
                                activateButtonAction.classList.add('btn-success');

                                activateButtonAction.addEventListener('click', async (event) => {
                                    event.preventDefault();

                                    activateButtonAction.setAttribute('disabled', 'disabled');
                                    activateButtonAction.textContent = 'Carregando...';

                                    await registrationEntityService.update(id, { active: true });

                                    showNotification({ 
                                        type: 'success', 
                                        title: 'Sucesso', 
                                        message: 'Matricula ativada com sucesso'
                                    });

                                    loadRegistration();
                                });

                                if (active) {
                                    actions.appendChild(deleteButtonAction);
                                } else {
                                    actions.appendChild(activateButtonAction);
                                }

                            });

                            listWrapper.appendChild(list);

                            wrapper.classList.remove('hidden');
                            emptyWrapper.classList.add('hidden');
                            emptyWrapper.innerHTML = '';
                        }
                    }

                    loadRegistration();
                }
            }
        });
    }
}

export default {
    init() {
        startCancelRegistrationModule();

        window.addEventListener('changepage', function(event) {
            if (started) {
                return;
            }

            startCancelRegistrationModule();
        });
    }
}
