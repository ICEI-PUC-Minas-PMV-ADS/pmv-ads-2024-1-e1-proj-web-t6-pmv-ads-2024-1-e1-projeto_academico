import './index.css';

const form = document.querySelector('.form-cadastro-aluno');

if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const inputs = form.querySelectorAll('input');

        console.log('form', form, inputs);
    });
}

