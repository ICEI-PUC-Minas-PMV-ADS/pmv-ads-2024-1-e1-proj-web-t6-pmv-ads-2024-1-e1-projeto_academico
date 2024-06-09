import './index.css';
import { turmaEntityService } from '@/services/turmaEntityService.service.js'; 
import { useDashboardUtils } from '@/hooks/useDashboardUtils';

function extractTurmaIdFromUrl() {
    const url = window.location.href;
    const regex = /\/turmas\/editar\/([a-zA-Z0-9-]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

function setStateLoading(form, state = true) {
    if (form) {
        const inputs = form.querySelectorAll('input, select');
        const buttonSubmit = form.querySelector('button[type=submit]');
        
        if (state) {
            inputs.forEach((input) => {
                input.setAttribute('disabled', 'disabled');
            });
            buttonSubmit.setAttribute('disabled', 'disabled');
            buttonSubmit.textContent = 'Carregando...';
        } else {
            inputs.forEach((input) => {
                input.removeAttribute('disabled');
            });
            buttonSubmit.removeAttribute('disabled');
            buttonSubmit.textContent = 'Salvar';
        }
    }
}

async function loadTurmaData(turmaId) {
    const form = document.querySelector('#turma-form');
    setStateLoading(form, true);
    
    try {
        const { data: turma } = await turmaEntityService.getByCode(turmaId);

        if (turma) {
            console.log({ turma })
            form.querySelector('#nome').value = turma.nome || '';
            form.querySelector('#professor').value = turma.professor || '';
            form.querySelector('#inicio').value = turma.inicio || '';
            form.querySelector('#encerramento').value = turma.encerramento || '';
            form.querySelector('#max_alunos').value = turma.max_alunos || '';
            form.querySelector('#horario').value = turma.horario || '';
            form.querySelector('#semestre').value = turma.semestre || '';

            const daysOfWeek = turma.dias_semana ? turma.dias_semana.split(',') : [];

            daysOfWeek.forEach(day => {
                const checkbox = form.querySelector(`input[type=checkbox][value=${day}]`);
                if (checkbox) {
                    checkbox.checked = true;
                }
            });
        }
    } catch (error) {
        console.error('Erro ao carregar dados da turma:', error);
    }

    setStateLoading(form, false);
}

async function onFormSubmit(event) {
    event.preventDefault();

    const form = document.querySelector('#turma-form');
    const inputs = form.querySelectorAll('input, select');
    const { showNotification } = useDashboardUtils();

    setStateLoading(form);

    if (inputs) {
        const payload = {};
        inputs.forEach(input => {
            const key = input.getAttribute('name');
            const value = input.type === 'checkbox' ? input.checked && input.value : input.value;
            if (value) {
                if (payload[key]) {
                    payload[key] += `,${value}`;
                } else {
                    payload[key] = value;
                }
            }
        });

        const turmaId = extractTurmaIdFromUrl();

        try {
            await turmaEntityService.update(turmaId, payload);

            showNotification({ 
                type: 'success', 
                title: 'Sucesso', 
                message: 'Dados alterados com sucesso'
            });

            navigateToRoute(null, '/turmas/visualizar');
        } catch (error) {
            console.error('Erro ao atualizar dados da turma:', error);
            showNotification({ 
                type: 'error', 
                title: 'Erro', 
                message: 'Erro ao atualizar os dados da turma'
            });
        } finally {
            setStateLoading(form, false);
        }
    }
}

export default {
    init() {
        window.onFormSubmit = onFormSubmit;

        const turmaId = extractTurmaIdFromUrl();

        if (turmaId) {
            loadTurmaData(turmaId);
        }
    }
}
