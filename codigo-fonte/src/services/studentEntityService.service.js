import { useFakeRequest } from '@/hooks/useFakeRequest';
import { useLocalStorage } from '/src/hooks/useLocalstorage';

const COLLECTION_NAME = 'student-collection';

const { fakeRequest } = useFakeRequest();
const { 
    getCollection, 
    addItem, 
    getItem, 
    updateItem, 
    removeItem 
} = useLocalStorage(COLLECTION_NAME);

export const studentEntityService = {
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
        removeItem(id);

        return fakeRequest({
            message: 'Dados retornados com sucesso',
            data: [],
        });
    }
}