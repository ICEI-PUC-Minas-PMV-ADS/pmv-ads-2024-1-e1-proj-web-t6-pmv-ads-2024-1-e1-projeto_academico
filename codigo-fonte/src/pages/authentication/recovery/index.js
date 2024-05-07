import { useDashboardUtils } from '@/hooks/useDashboardUtils';
import './index.css';

export default {
    init() {
        const formLogin = document.getElementById('form-recovery');

        if (formLogin) {
            formLogin.addEventListener('submit', async (event) => {
                event.preventDefault();
                const { showNotification } = useDashboardUtils();

                const username = formLogin.querySelector('#username').value;

                if (username === "") {
                    showNotification({
                        type: "error",
                        title: "Sem dados",
                        message: "Precisa adicionar email",
                    });
                    return;
                }

                showNotification({
                    type: "success",
                    title: "Dados enviados com sucesso",
                    message: "Os dados foram enviados para seu email",
                });
            });
        }
    }
}
