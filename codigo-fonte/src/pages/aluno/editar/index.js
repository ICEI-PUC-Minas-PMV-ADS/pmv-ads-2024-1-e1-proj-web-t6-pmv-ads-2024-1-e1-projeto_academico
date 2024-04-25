import { studentEntityService } from '@/services/studentEntityService.service.js';
import { useDashboardUtils } from '@/hooks/useDashboardUtils.js';
import { navigateToRoute } from '@/router';
import './index.css';

function setStateLoading(state = true) {
    const form = document.querySelector('.form-cadastro-aluno');
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

async function loadStudentData() {
    const id = [...window.location.href.split('/')].pop();
    const form = document.querySelector('.form-cadastro-aluno');

    if (form) {
        setStateLoading();

        const { data } = await studentEntityService.getByCode(id);

        Object.entries({ ...data }).forEach(([key, value]) => {
            if (['id', 'created_at'].includes(key)) {
                return;
            }

            const input = form.querySelector(`input[name=${key}], select[name=${key}]`);

            if (['nacionalidade', 'naturalidade'].includes(key)) {
                const options = input.querySelectorAll('options');

                options.forEach((option) => {
                    option.removeAttribute('selected');

                    if (option.value === value) {
                        option.setAttribute('selected');
                    }
                })
            }

            input.value = value;
        });

        setStateLoading(false);
    }
}

async function onFormSubmit(event) {
    event.preventDefault();
    const form = document.querySelector('.form-cadastro-aluno');
    const id = [...window.location.href.split('/')].pop();

    setStateLoading(form);

    const inputs = form.querySelectorAll('input, select');
    const { showNotification } = useDashboardUtils();

    if (inputs) {
        const payload = {};
        inputs.forEach(_ => {
            const key = _.getAttribute('name');
            const value = _.value;
            payload[key] = value;
        });

        await studentEntityService.update(id, payload);

        showNotification({
            type: 'success',
            title: 'Sucesso',
            message: 'Dados cadastrados com sucesso'
        });

        setStateLoading(form);
        navigateToRoute(null, '/aluno/lista');
    }
}

export default {
    init() {
        loadStudentData();
        window.onFormSubmit = null;
        window.onFormSubmit = onFormSubmit;
    }
}




