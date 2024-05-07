import { studentEntityService } from '@/services/studentEntityService.service.js';
import { useDashboardUtils } from '@/hooks/useDashboardUtils.js';
import { navigateToRoute } from '@/router';
import { faker } from '@faker-js/faker';
import './index.css';

function setStateLoading(form, state = true) {
    if (form) {
        const inputs = form.querySelectorAll('input, select');
        const buttonSubmit = form.querySelector('button[type=submit]');
        const buttoncancel = form.querySelector('button[type=button]');
        
        if (state) {
            inputs.forEach((input) => {
                input.setAttribute('disabled', 'disabled');
            });
            buttonSubmit.setAttribute('disabled', 'disabled');
            buttonSubmit.textContent = 'Carregando...';
            buttoncancel.setAttribute('disabled', 'disabled');
        } else {
            inputs.forEach((input) => {
                input.removeAttribute('disabled');
            });
            buttonSubmit.removeAttribute('disabled');
            buttonSubmit.textContent = 'Atualizar';
            buttoncancel.removeAttribute('disabled');
        }

    }
}

async function onFormSubmit(event) {
    event.preventDefault();

    const form = document.querySelector('.form-cadastro-aluno');
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

        await studentEntityService.create(payload);

        showNotification({ 
            type: 'success', 
            title: 'Sucesso', 
            message: 'Dados cadastrados com sucesso'
        });

        navigateToRoute(null, '/aluno/lista');

        setStateLoading(form, false);
    }
}

export default {
    init() {
        window.onFormSubmit = null;
        window.onFormSubmit = onFormSubmit;
    }
}




