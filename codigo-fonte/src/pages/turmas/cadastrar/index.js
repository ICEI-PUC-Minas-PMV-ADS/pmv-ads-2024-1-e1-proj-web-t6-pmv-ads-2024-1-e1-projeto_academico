import './index.css';
import visualizarTurmas from '../visualizar'; // Importe o módulo de visualização de turmas
import { turmaEntityService } from '@/services/turmaEntityService.service.js'; // Importe o serviço de entidade de turma

// Após o sucesso do cadastro de turmas, chame a função para criar uma nova turma na página de visualização de turmas
async function onFormSubmit(event) {
    // Seu código existente...

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

        // Corrija a chamada para usar o serviço de entidade de turma
        await turmaEntityService.create(payload);

        showNotification({ 
            type: 'success', 
            title: 'Sucesso', 
            message: 'Dados cadastrados com sucesso'
        });

        // Chame a função para criar uma nova turma com os mesmos dados na página de visualização de turmas
        await visualizarTurmas.createTurma(payload);

        // Inserir dinamicamente as informações da turma na página
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