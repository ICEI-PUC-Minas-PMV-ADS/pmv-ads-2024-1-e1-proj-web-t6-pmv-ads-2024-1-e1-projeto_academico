import { useFakeRequest } from "@/hooks/useFakeRequest";

export const authenticationService = {
    async sigIn(username, password) {
        const {fakeRequest} = useFakeRequest();

        if (username !== 'email@email.com' || password !== 'admin') {
            return fakeRequest({
                message: 'Usuário ou senha inválidos',
                data: [],    
            }, 'reject');
        }

        return fakeRequest({
            message: 'Dados retornados com sucesso',
            data: {
                name: 'Admin',
                email: 'email@email.com',
                image: 'https://img.freepik.com/fotos-premium/um-personagem-de-desenho-animado-do-avatar-do-jogo_667286-2738.jpg '
            },
        });
    },
};