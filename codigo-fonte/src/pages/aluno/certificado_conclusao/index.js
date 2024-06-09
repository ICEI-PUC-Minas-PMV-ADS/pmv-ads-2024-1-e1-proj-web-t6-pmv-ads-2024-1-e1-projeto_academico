
import { studentEntityService } from '/src/services/studentEntityService.service.js';
import { useDOMManager } from '/src/hooks/useDOMManager.js';
import { useDashboardUtils } from '@/hooks/useDashboardUtils';
import './index.css';

let started = false;

async function startStudentListModule() {
    started = true;    
}

export default {
    init() {
        console.log('aluno certificado conclusao');

        let aluno = {
            nome: "João Barbosa Dias",
            cpf: "111.222.333-44",
            matricula: "12345",
            anoLetivo: 2022,
            turmas: [
                {
                    nome: "Matemática Básica",
                    nota: 8.5,
                    situacao: "Aprovado"
                },
                {
                    nome: "Física Aplicada",
                    nota: 6.0,
                    situacao: "Reprovado"
                },
                {
                    nome: "Química Geral",
                    nota: 4.5,
                    situacao: "Reprovado"
                },
                {
                    nome: "Geografia",
                    nota: 5.4,
                    situacao: "Reprovado"
                }
            ]
        };

        console.log(aluno);

        let nomeAlunoHTML = `${aluno.nome}`
        nomeAluno1.innerHTML = nomeAlunoHTML

        let anoLetivoHTML = `${aluno.anoLetivo}`
        anoLetivo1.innerHTML = anoLetivoHTML

        let nomeTurma1 = document.getElementById('nomeTurma1')
        
        let primeiraTurma = aluno.turmas[0];

        let turma1 = document.createElement('div');
         turma1.textContent = `${primeiraTurma.nome}`

         nomeTurma1.appendChild(turma1);


    }
}