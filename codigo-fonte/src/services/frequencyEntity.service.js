import { useFakeRequest } from '@/hooks/useFakeRequest';
import { useLocalStorage } from '/src/hooks/useLocalstorage';

const COLLECTION_NAME = 'frequency-collection';

const { fakeRequest } = useFakeRequest();
const { 
    getCollection, 
    addItem, 
    getItem, 
    updateItem, 
} = useLocalStorage(COLLECTION_NAME);

export const frequencyEntityService = {
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
    async update(id, data = {}) {
        updateItem(id, data);

        return fakeRequest({
            message: 'Dados retornados com sucesso',
            data: getItem(id),
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
}

