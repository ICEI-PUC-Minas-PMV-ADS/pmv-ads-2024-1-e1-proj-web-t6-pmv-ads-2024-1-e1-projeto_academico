import { turmaEntityService } from '@/services/turmaEntityService.service.js'; 
import './index.css';

let started = false;

async function startClassRoomModule() {
    started = true;

    const wrapper = document.querySelector('.turma-lista');

    if (wrapper) {
        if (document.querySelector('.loading')) {
            return false;
        }

        const loadingElement = document.createElement('div');
        loadingElement.classList.add('loading');
        loadingElement.innerHTML = 'Carregando...';

        wrapper.appendChild(loadingElement);

        const { data: collection } = await turmaEntityService.getAll();

        const lista = document.createElement('ul');

        collection.forEach((turma) => {
        //     const item = document.createElement('li');
        //     item.textContent = turma.nome;

        //     lista.appendChild(item);
        // });
        const item = document.createElement('li');
        item.innerHTML = `
            <span class="turma-nome">${turma.nome}</span>
            <span class="turma-info">${turma.ano} - ${turma.professor}</span>
        `;
        lista.appendChild(item);
    });

        wrapper.appendChild(lista);
        
        loadingElement.remove();    
    }
}

export default {
    init() {
        if (started) {
            return;
        }

        startClassRoomModule();

        window.addEventListener('changepage', function(event) {
            startClassRoomModule();
        });
    }
}

