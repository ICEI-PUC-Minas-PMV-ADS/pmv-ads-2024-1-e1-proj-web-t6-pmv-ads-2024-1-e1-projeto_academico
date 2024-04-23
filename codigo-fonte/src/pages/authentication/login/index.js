import { useAuthentication } from "@/hooks/useAuthentication";
import './index.css';

const formLogin = document.getElementById('form-login');
const { sigIn } = useAuthentication();

if (formLogin) {
    const loginButton = formLogin.querySelector('.form-login-button');

    formLogin.addEventListener('submit', async (event) => {
        event.preventDefault();

        try {
            const username = formLogin.querySelector('#username').value;
            const password = formLogin.querySelector('#password').value;

            loginButton.innerText = 'Carregando...';
            loginButton.setAttribute('disabled', 'disabled');
            loginButton.classList.add('disabled');

            await sigIn(username, password);


            loginButton.innerText = 'ENTRAR';
            loginButton.removeAttribute('disabled');
            loginButton.classList.remove('disabled');

            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    });
}