
import { registrationEntityService } from '@/services/registrationEntity.service';
import { useDashboardUtils } from '@/hooks/useDashboardUtils';
import { useDOMManager } from '/src/hooks/useDOMManager.js';
import './index.css';
import { frequencyEntityService } from '@/services/frequencyEntity.service';

let started = false;

async function startFrequencyModule() {
    started = true;

    const { createSimpleFrequencyListList } = useDOMManager();

    const form = document.querySelector('.consultar-frequencia .consultar-frequencia-search-form');
    const wrapper = document.querySelector('.consultar-frequencia .consultar-frequencia_wrapper');
    const listWrapper = document.querySelector('.consultar-frequencia .lista-wrapper');
    const emptyWrapper = document.querySelector('.consultar-frequencia .consultar-frequencia_empty');
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

                        const { data: frequencyCollection } = await frequencyEntityService.getAll();

                        const filteredCollection = [...frequencyCollection].filter((matricula) => {
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

                            const nomeWrapper = document.querySelector('.consultar-frequencia .nome_aluno');
                            nomeWrapper.innerHTML = '';
                            nomeWrapper.textContent = 'Aluno: ' + nomeAluno;

                            const list = createSimpleFrequencyListList(filteredCollection);

                            const rows = list.querySelectorAll('li');

                            rows.forEach((row) => {
                                const actions = row.querySelector('.actions');
                                const status = row.getAttribute('data-status');
                                let icon = document.createElement('div');
                                switch (status) {
                                    case 'P': {
                                        icon.classList.add('icon');
                                        icon.classList.add('icon-success');
                                        icon.innerHTML = '<span class="iconify-inline" data-icon="ic:baseline-check"></span>';
                                        break;
                                    }
                                    case 'F': {
                                        icon.classList.add('icon');
                                        icon.classList.add('icon-danger');
                                        icon.innerHTML = '<span class="iconify-inline" data-icon="ic:twotone-close"></span>';
                                        break;
                                    }
                                    default: {
                                        icon.classList.add('icon');
                                        icon.classList.add('icon-default');
                                        icon.innerHTML = '<span class="iconify-inline" data-icon="ic:baseline-edit-note"></span>';
                                        break;
                                    }
                                }

                                actions.appendChild(icon);
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
        startFrequencyModule();

        window.addEventListener('changepage', function(event) {
            if (started) {
                return;
            }

            startFrequencyModule();
        });
    }
}
