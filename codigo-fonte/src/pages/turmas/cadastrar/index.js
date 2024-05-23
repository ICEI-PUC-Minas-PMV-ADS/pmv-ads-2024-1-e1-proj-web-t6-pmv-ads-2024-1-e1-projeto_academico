import './index.css';
import visualizarTurmas from '../visualizar'; 
import { turmaEntityService } from '@/services/turmaEntityService.service.js'; 


async function onFormSubmit(event) {
    

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

       
        await visualizarTurmas.createTurma(payload);

       
        const turmasContainer = document.getElementById('turmasContainer');
        const turmaItem = document.createElement('div');
        turmaItem.classList.add('turma-item');
        turmaItem.innerHTML = `
            <h3>${payload.nome}</h3>
            <div class="turma-info">
                <p>Ano: ${payload.ano}</p>
                <p>Responsável: ${payload.responsavel}</p>
            </div>
            <div class="turma-action">
                <a href="/visualizar_detalhes/index.html"><button>Detalhes</button></a>
            </div>
        `;
        turmasContainer.appendChild(turmaItem);

        navigateToRoute(null, '/turma/lista');

        setStateLoading(form, false);
    }
}