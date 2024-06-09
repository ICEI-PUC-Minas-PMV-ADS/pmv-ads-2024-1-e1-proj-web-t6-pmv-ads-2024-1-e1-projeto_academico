
import './index.css';

let started = true;

export default {
    init() {
        console.log('aluno certificado conclusao');

        document.addEventListener('DOMContentLoaded', function() {
            const nomeAluno = "João Barbosa Dias";
            const nomeCurso = "JavaScript Avançado";
            const dataAtual = new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
        
            document.querySelector('.certificado h2').textContent = nomeAluno;
            document.querySelector('.certificado h3').textContent = nomeCurso;
            document.querySelector('.certificado .data').textContent = `Data: ${dataAtual}`;
        });

    }
}