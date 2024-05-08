import { useAuthentication } from "/src/hooks/useAuthentication.js";
import './index.css';
import { useDashboardUtils } from "@/hooks/useDashboardUtils";

export default {
    init() {
        const formLogin = document.getElementById('form-login');
        const { sigIn } = useAuthentication();

        if (formLogin) {
            const loginButton = formLogin.querySelector('.form-login-button');
            const { showNotification } = useDashboardUtils();

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
                    showNotification({
                        type: 'error',
                        title: 'Erro!',
                        message: String(error).replace('Error: ', ''),
                    });
                    loginButton.innerText = 'ENTRAR';
                    loginButton.removeAttribute('disabled');
                    loginButton.classList.remove('disabled');
                }
            });
        }
    }
}
