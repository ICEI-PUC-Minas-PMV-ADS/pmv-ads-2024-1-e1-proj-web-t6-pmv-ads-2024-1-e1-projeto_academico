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
                name: 'Prof. Maria Silva',
                email: 'email@email.com',
                image: '/images/img_perfil.jpg',
                role: 'professor',
            },
        });
    },
};