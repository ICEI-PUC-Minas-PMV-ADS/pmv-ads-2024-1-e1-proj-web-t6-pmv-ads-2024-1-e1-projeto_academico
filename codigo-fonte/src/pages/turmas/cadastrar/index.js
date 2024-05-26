import './index.css';
import { turmaEntityService } from '@/services/turmaEntityService.service.js'; 
import { useDashboardUtils } from '@/hooks/useDashboardUtils';
import { faker } from '@faker-js/faker';

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
            buttonSubmit.textContent = 'Atualizar';
        }

    }
}

async function onFormSubmit(event) {
    event.preventDefault();

    const form = document.querySelector('#turma-form');
    const inputs = form.querySelectorAll('input, select');
    const { showNotification } = useDashboardUtils();

    setStateLoading(form);

    if (inputs) {
        const payload = {};
        inputs.forEach(_ => {
            const key = _.getAttribute('name');
            const value = _.value;
            payload[key] = value;
        });

        payload.id = faker.string.uuid();
        payload.created_at = new Date().toISOString();
        payload.active = true;

        await turmaEntityService.create(payload);

        showNotification({ 
            type: 'success', 
            title: 'Sucesso', 
            message: 'Dados cadastrados com sucesso'
        });

        navigateToRoute(null, '/turmas/visualizar');

        setStateLoading(form, false);
    }
}

export default {
    init() {
        window.onFormSubmit = null;
        window.onFormSubmit = onFormSubmit;
    }
}