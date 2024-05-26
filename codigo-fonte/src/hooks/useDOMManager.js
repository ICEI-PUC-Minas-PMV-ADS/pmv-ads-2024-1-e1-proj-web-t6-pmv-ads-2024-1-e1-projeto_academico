/**
 * 
 * @returns { createTable, createTableActions }
 */
export const useDOMManager = () => {
    /**
     * 
     * @param {Array} collection  
     */
    function createAttendanceList(collection = []) {
        const list = document.createElement('ul');
        list.classList.add('lista-mae');

        if (collection.length) {
            collection.forEach((item) => {
                const li = document.createElement('li');
                li.classList.add('lista-filho');

                li.setAttribute('data-id', item.id);
                li.setAttribute('data-active', item.active);

                const nameNode = document.createElement('div');
                const yearNode = document.createElement('div');
                const responsibleNode = document.createElement('div');
                const actionsNode = document.createElement('div');
                
                nameNode.textContent = item.nome;
                nameNode.classList.add('font-bold');
                nameNode.classList.add('text-primary');
                
                yearNode.textContent = item.semestre;
                yearNode.classList.add('font-bold');

                responsibleNode.textContent = 'Responsável: ' + item.professor;
                responsibleNode.classList.add('font-bold');

                actionsNode.classList.add('actions');
                actionsNode.classList.add('flex');
                actionsNode.classList.add('justify-center');
                actionsNode.classList.add('gap-2');

                li.appendChild(nameNode);
                li.appendChild(yearNode);
                li.appendChild(responsibleNode);
                li.appendChild(actionsNode);

                list.appendChild(li);
            });

            return list;
        }
    }

    /**
     * 
     * @param {Array} collection  
     */
    function createRegistrationList(collection = []) {
        const list = document.createElement('ul');
        list.classList.add('lista-mae');

        if (collection.length) {
            collection.forEach((item) => {
                const li = document.createElement('li');
                li.classList.add('lista-filho');

                li.setAttribute('data-id', item.id);
                li.setAttribute('data-name', item.nome);
                li.setAttribute('data-cpf', item.cpf);
                li.setAttribute('data-active', item.active);

                const nameNode = document.createElement('div');
                const emailNode = document.createElement('div');
                const actionsNode = document.createElement('div');
                
                nameNode.textContent = item.nome;
                nameNode.classList.add('font-bold');
                nameNode.classList.add('text-primary');
                emailNode.textContent = item.email;
                emailNode.classList.add('font-bold');

                actionsNode.classList.add('actions');
                actionsNode.classList.add('flex');
                actionsNode.classList.add('justify-center');
                actionsNode.classList.add('gap-2');

                li.appendChild(nameNode);
                li.appendChild(emailNode);
                li.appendChild(actionsNode);

                list.appendChild(li);
            });

            return list;
        }
    }

     /**
     * 
     * @param {Array} collection  
     */
     function createSimpleFrequencyListList(collection = []) {
        const list = document.createElement('ul');
        list.classList.add('lista-mae');

        if (collection.length) {
            collection.forEach((item) => {
                const li = document.createElement('li');
                li.classList.add('lista-filho');

                li.setAttribute('data-id', item.id);
                li.setAttribute('data-name', item.aluno_name);
                li.setAttribute('data-cpf', item.aluno_cpf);
                li.setAttribute('data-status', item.status_aluno);

                const nameNode = document.createElement('div');
                const turmaNode = document.createElement('div');
                const dataNode = document.createElement('div');
                const actionsNode = document.createElement('div');
                
                nameNode.textContent = item.aluno_name;
                nameNode.classList.add('font-bold');
                nameNode.classList.add('text-primary');

                turmaNode.textContent = item.turma_name;
                turmaNode.classList.add('font-bold');

                dataNode.textContent = new Date(item.data).toLocaleDateString();
                dataNode.classList.add('font-bold');

                actionsNode.classList.add('actions');
                actionsNode.classList.add('flex');
                actionsNode.classList.add('justify-center');
                actionsNode.classList.add('gap-2');

                li.appendChild(nameNode);
                li.appendChild(turmaNode);
                li.appendChild(dataNode);
                li.appendChild(actionsNode);

                list.appendChild(li);
            });

            return list;
        }
    }

    /**
     * 
     * @param {Array} collection  
     */
    function createCancelRegistrationList(collection = []) {
        const list = document.createElement('ul');
        list.classList.add('lista-mae');

        if (collection.length) {
            collection.forEach((item) => {
                const li = document.createElement('li');
                li.classList.add('lista-filho');

                li.setAttribute('data-id', item.id);
                li.setAttribute('data-active', item.active);

                const nameNode = document.createElement('div');
                const classRoomNode = document.createElement('div');
                const actionsNode = document.createElement('div');
                
                nameNode.textContent = item.aluno_name;
                nameNode.classList.add('font-bold');
                nameNode.classList.add('text-primary');

                classRoomNode.textContent = item.turma_nome;
                classRoomNode.classList.add('font-bold');

                actionsNode.classList.add('actions');
                actionsNode.classList.add('flex');
                actionsNode.classList.add('justify-center');
                actionsNode.classList.add('gap-2');

                li.appendChild(nameNode);
                li.appendChild(classRoomNode);
                li.appendChild(actionsNode);

                list.appendChild(li);
            });

            return list;
        }
    }

    /**
     * 
     * @param {Array} collection  
     */
    function createList(collection = []) {
        const list = document.createElement('ul');
        list.classList.add('lista-mae');

        if (collection.length) {
            collection.forEach((item) => {
                const li = document.createElement('li');
                li.classList.add('lista-filho');

                li.setAttribute('data-id', item.id);
                li.setAttribute('data-active', item.active);

                const nameNode = document.createElement('div');
                const emailNode = document.createElement('div');
                const actionsNode = document.createElement('div');
                
                nameNode.textContent = item.nome;
                nameNode.classList.add('font-bold');
                nameNode.classList.add('text-primary');
                emailNode.textContent = item.email;
                emailNode.classList.add('font-bold');

                actionsNode.classList.add('actions');
                actionsNode.classList.add('flex');
                actionsNode.classList.add('justify-center');
                actionsNode.classList.add('gap-2');

                li.appendChild(nameNode);
                li.appendChild(emailNode);
                li.appendChild(actionsNode);

                list.appendChild(li);
            });

            return list;
        }
    }

    /**
     * 
     * @param {HTMLListElement|null} table 
     */
    function createListActions(list = null) {
        if (list) {
            const listItems = list.querySelectorAll('li');

            listItems.forEach(row => {
                const actionsNode = row.querySelector('.actions');
                actionsNode.classList.add('actions-wrapper');
                const active = row.getAttribute('data-active') === 'true';

                const buttonEdit = document.createElement('button');
                buttonEdit.classList.add('btn');
                buttonEdit.classList.add('btn-primary');
                buttonEdit.classList.add('edit-button');
                buttonEdit.innerHTML = '<span class="iconify-inline" data-icon="ic:outline-edit"></span>';

                const buttonDelete = document.createElement('button');
                buttonDelete.classList.add('btn');
                buttonDelete.classList.add('btn-danger');
                buttonDelete.classList.add('delete-button');
                buttonDelete.innerHTML = '<span class="iconify-inline" data-icon="ic:outline-delete"></span>';

                const buttonActive = document.createElement('button');
                buttonActive.classList.add('btn');
                buttonActive.classList.add('btn-success');
                buttonActive.classList.add('active-button');
                buttonActive.innerHTML = '<span class="iconify-inline" data-icon="ic:outline-refresh"></span>';

                actionsNode.appendChild(buttonEdit);

                if (active) {
                    actionsNode.appendChild(buttonDelete);
                }

                if (!active) {
                    actionsNode.appendChild(buttonActive);
                }
            })
        }
    }

    /**
     * 
     * @param {Array} collection 
     * @param {Array} headers 
     * 
     * @returns HTMLTableElement
     */
    function createTable(collection = [], headers = []) {
        const tableElement = document.createElement('table');
        const headElement = document.createElement('thead');
        const headRowElement = document.createElement('tr');
        const bodyElement = document.createElement('tbody');

        tableElement.classList.add('global-el-table');
        headElement.classList.add('global-el-table-head');
        bodyElement.classList.add('global-el-table-body');
        headRowElement.classList.add('global-el-table-row');
        headRowElement.classList.add('header-row');
    
        headers.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header.label;
            const divided = Math.floor(headers.length);
            const width = Math.floor(100 / divided);

            th.setAttribute('min-width', `${width}%`);

            headRowElement.appendChild(th);
        });
    
        headElement.appendChild(headRowElement);
    
        if (collection.length === 0) {
            const emptyRow = document.createElement('tr');
            const emptyCell = document.createElement('td');
            emptyCell.textContent = 'Nenhum dado disponível';
            emptyCell.classList.add('text-center');
            emptyCell.setAttribute('colspan', headers.length);
            emptyRow.appendChild(emptyCell);
            bodyElement.appendChild(emptyRow);
        } else {
            collection.forEach(i => {
                const row = document.createElement('tr');
                row.classList.add('global-el-table-row');
                row.classList.add('body-row');
                row.setAttribute('data-id', i.id);
                row.setAttribute('data-active', i.active);
        
                headers.forEach((header) => {
                    const cell = document.createElement('td');
                    cell.textContent = i[header.key];
                    row.appendChild(cell);
                });
        
                bodyElement.appendChild(row);
            });
        }
        
        
        tableElement.appendChild(headElement);
        tableElement.appendChild(bodyElement);
    
        return tableElement;
    }

    /**
     * 
     * @param {HTMLTableElement|null} table 
     */
    function createTableActions(table = null) {
        if (table) {
            const tableHeaderRow = table.querySelector('.header-row');
            const tableBodyRow = table.querySelectorAll('.body-row');

            const th = document.createElement('th');
            th.setAttribute('width', '10%');
            tableHeaderRow.appendChild(th);

            tableBodyRow.forEach(row => {
                const active = row.getAttribute('data-active') === 'true';

                const buttonEdit = document.createElement('button');
                buttonEdit.classList.add('edit-button');
                buttonEdit.innerHTML = '<span class="iconify-inline" data-icon="ic:outline-edit"></span>';

                const buttonDelete = document.createElement('button');
                buttonDelete.classList.add('delete-button');
                buttonDelete.innerHTML = '<span class="iconify-inline" data-icon="ic:outline-delete"></span>';

                const buttonActive = document.createElement('button');
                buttonActive.classList.add('active-button');
                buttonActive.innerHTML = '<span class="iconify-inline" data-icon="ic:outline-refresh"></span>';


                const actionsWrapper = document.createElement('div');
                actionsWrapper.classList.add('actions-wrapper');
                const td = document.createElement('td');
                
                actionsWrapper.appendChild(buttonEdit);

                if (active) {
                    actionsWrapper.appendChild(buttonDelete);
                }

                if (!active) {
                    actionsWrapper.appendChild(buttonActive);
                }

                td.appendChild(actionsWrapper);
                row.appendChild(td);
            })
        }
    }

    
    
    return {
        createTable,
        createList,
        createTableActions,
        createListActions,
        createAttendanceList,
        createRegistrationList,
        createCancelRegistrationList,
        createSimpleFrequencyListList,
    }
};