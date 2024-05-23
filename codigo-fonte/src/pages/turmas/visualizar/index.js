import { turmaEntityService } from '@/services/turmaEntityService.service.js'; // Importe o serviço de entidade de turma
import { useDashboardUtils } from '@/hooks/useDashboardUtils.js';
import { navigateToRoute } from '@/router';

import './index.css';

async function createTurma(turma) {
    const { showNotification } = useDashboardUtils();

    try {
        // Chame o serviço para criar a turma com os dados fornecidos
        await turmaEntityService.create(turma);

        showNotification({ 
            type: 'success', 
            title: 'Sucesso', 
            message: 'Turma criada com sucesso'
        });

        // Recarregue a página ou faça outra chamada para atualizar a lista de turmas exibidas

    } catch (error) {
        // Lidar com erros, se houver
        console.error('Erro ao criar turma:', error);
        showNotification({ 
            type: 'error', 
            title: 'Erro', 
            message: 'Erro ao criar turma. Por favor, tente novamente mais tarde.'
        });
    }
}

export default {
    createTurma // Exporte a função para que ela possa ser usada em outros lugares, como no arquivo cadastrarTurmas.js
};