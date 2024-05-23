import { turmaEntityService } from '@/services/turmaEntityService.service.js'; 
import { useDashboardUtils } from '@/hooks/useDashboardUtils.js';
import { navigateToRoute } from '@/router';

import './index.css';

async function createTurma(turma) {
    const { showNotification } = useDashboardUtils();

    try {
        
        await turmaEntityService.create(turma);

        showNotification({ 
            type: 'success', 
            title: 'Sucesso', 
            message: 'Turma criada com sucesso'
        });

        

    } catch (error) {
        
        console.error('Erro ao criar turma:', error);
        showNotification({ 
            type: 'error', 
            title: 'Erro', 
            message: 'Erro ao criar turma. Por favor, tente novamente mais tarde.'
        });
    }
}

export default {
    createTurma 
};