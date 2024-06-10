import { useFakeRequest } from '@/hooks/useFakeRequest';
import { useLocalStorage } from '@/hooks/useLocalstorage';
import { useDashboardUtils } from '@/hooks/useDashboardUtils';

const COLLECTION_NAME = 'turma-collection';

const { fakeRequest } = useFakeRequest();
const { 
    getCollection, 
    addItem, 
    getItem, 
    updateItem, 
    removeItem 
} = useLocalStorage(COLLECTION_NAME);

export const turmaEntityService = {
    async getAll() {
        return fakeRequest({
            message: 'Dados retornados com sucesso',
            data: getCollection(),
        });
    },
    async getByCode(id) {
        return fakeRequest({
            message: 'Dados retornados com sucesso',
            data: getItem(id),
        });
    },
    async create(data = {}) {
        addItem(data);

        return fakeRequest({
            message: 'Dados retornados com sucesso',
            data: [...getCollection()].shift(),
        });
    },
    async update(id, newData = {}) {
        // Atualizar os dados da turma com o ID especificado
        const currentData = getItem(id);
        const updatedData = { ...currentData, ...newData };
        updateItem(id, updatedData);

        return fakeRequest({
            message: 'Dados retornados com sucesso',
            data: updatedData,
        });
    },
    async delete(id) {
        updateItem(id, { active: false });

        return fakeRequest({
            message: 'Dados retornados com sucesso',
            data: [],
        });
    },
    async activate(id) {
        updateItem(id, { active: true });

        return fakeRequest({
            message: 'Dados retornados com sucesso',
            data: [],
        });
    }
};

export async function onFormSubmit(event) {
    event.preventDefault();

    const form = document.querySelector('#turma-form');
    const inputs = form.querySelectorAll('input, select');
    const { showNotification } = useDashboardUtils();

    setStateLoading(form);

    if (inputs) {
        const payload = {};
        inputs.forEach(_ => {
            const key = _.getAttribute('name');
            const value = _.value;
            payload[key] = value;
        });

        // Obtém o ID da turma da URL
        const urlParams = new URLSearchParams(window.location.search);
        const turmaId = urlParams.get('id');

        // Atualiza os dados da turma existente
        await turmaEntityService.update(turmaId, payload);

        showNotification({ 
            type: 'success', 
            title: 'Sucesso', 
            message: 'Dados alterados com sucesso'
        });

        navigateToRoute(null, '/turmas/visualizar');

        setStateLoading(form, false);
    }
}
