export const useFakeRequest = () => {

    async function fakeRequest(data, type = 'resolve', timeout = 1000) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (type === 'resolve') {
                    return resolve({...data });
                }

                return reject({...data});
            }, timeout);
        })
    }

    return {
        fakeRequest,
    };
}