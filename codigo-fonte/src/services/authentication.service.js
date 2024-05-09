import { useFakeRequest } from "@/hooks/useFakeRequest";

export const authenticationService = {
    async sigIn(username, password) {
        const {fakeRequest} = useFakeRequest();
        const professor = {
            name: 'Prof. Maria Silva',
            email: 'professor@email.com',
            image: '/images/img_perfil.jpg',
            role: 'professor',
        };
        const aluno = {
            name: 'Joana Souza',
            email: 'aluno@email.com',
            image: 'https://img.freepik.com/fotos-premium/um-personagem-de-desenho-animado-do-avatar-do-jogo_667286-2738.jpg ',
            role: 'aluno',
        };

        if (username == 'professor@email.com' && password == 'admin') {
            return fakeRequest({
                message: 'Dados retornados com sucesso',
                data: professor,
            });
        } 
        
        if (username == 'aluno@email.com' && password == 'senha') {
            return fakeRequest({
                message: 'Dados retornados com sucesso',
                data: aluno,
            });
        } 

        return fakeRequest({
            message: 'Usuário ou senha inválidos',
            data: [],    
        }, 'reject');
    },
};