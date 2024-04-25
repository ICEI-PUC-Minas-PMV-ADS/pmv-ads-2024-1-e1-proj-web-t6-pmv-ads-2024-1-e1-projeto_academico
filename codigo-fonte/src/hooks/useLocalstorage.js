class LocalStorageUtility {
    constructor(collectionName) {
        this.collectionName = collectionName;
    }

    sortCollection(collection = []) {
        const sorted = collection.sort((a, b) => {
            return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        });

        return sorted;
    }

    addItem(item) {
        const collection = this.getCollection();
        collection.push(item);
        localStorage.setItem(this.collectionName, JSON.stringify(collection));
    }

    getItem(id) {
        const collection = this.getCollection();
        return collection.find(item => item.id === id);
    }

    updateItem(id, newValue) {
        const collection = this.getCollection();
        const updatedCollection = collection.map(item => {
            if (item.id === id) {
                return { ...item, ...newValue };
            }
            return item;
        });
        localStorage.setItem(this.collectionName, JSON.stringify(updatedCollection));
    }

    removeItem(id) {
        const collection = this.getCollection();
        const updatedCollection = collection.filter(item => item.id !== id);
        localStorage.setItem(this.collectionName, JSON.stringify(updatedCollection));
    }

    clearCollection() {
        localStorage.removeItem(this.collectionName);
    }

    getCollection() {
        const collectionString = localStorage.getItem(this.collectionName);
        return collectionString ? this.sortCollection(JSON.parse(collectionString)) : [];
    }
}


export const useLocalStorage = (collectionName) => {

    const utility = new LocalStorageUtility(collectionName);

    const addItem = (item) => {
        utility.addItem(item);
    };

    const getItem = (id) => {
        return utility.getItem(id);
    };

    const updateItem = (id, data) => {
        return utility.updateItem(id, data);
    };

    const removeItem = (id) => {
        return utility.removeItem(id);
    };

    const getCollection = () => {
        return utility.getCollection();
    }

    return {
        addItem,
        getItem,
        updateItem,
        removeItem,
        getCollection,
    };
}