import { studentEntityService } from '/src/services/studentEntityService.service.js';
import { useDOMManager } from '/src/hooks/useDOMManager.js';
import { useDashboardUtils } from '@/hooks/useDashboardUtils';
import './index.css';

let started = false;

async function startStudentListModule() {
    started = true;

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

    document.getElementById('searchButton').addEventListener('click', function() {
        let minhaDiv = document.getElementById('bodyCard');
        minhaDiv.style.display = 'inline-block'; // Faz a div aparecer
    });

    document.getElementById('searchForm').addEventListener('submit', function(event) {
        event.preventDefault();

        let valorSearch = document.getElementById('cpf').value;

        if (valorSearch === aluno.cpf) {
            let nomeAlunoHTML = `Aluno: ${aluno.nome}`;
            document.getElementById('nomeAluno').innerHTML = nomeAlunoHTML;

            let anoLetivoHTML = `Ano: ${aluno.anoLetivo}`;
            document.getElementById('anoLetivo').innerHTML = anoLetivoHTML;

            let turmaElements = ['turma1', 'turma2', 'turma3', 'turma4'];
            let notaElements = ['nota1', 'nota2', 'nota3', 'nota4'];
            let situacaoElements = ['situacao1', 'situacao2', 'situacao3', 'situacao4'];

            for (let i = 0; i < aluno.turmas.length; i++) {
                let turma = aluno.turmas[i];

                let nomeTurmaDiv = document.createElement('div');
                nomeTurmaDiv.textContent = turma.nome;
                document.getElementById(turmaElements[i]).appendChild(nomeTurmaDiv);

                let notaTurmaDiv = document.createElement('div');
                notaTurmaDiv.textContent = turma.nota;
                document.getElementById(notaElements[i]).appendChild(notaTurmaDiv);

                let situacaoTurmaDiv = document.createElement('div');
                situacaoTurmaDiv.textContent = turma.situacao;
                document.getElementById(situacaoElements[i]).appendChild(situacaoTurmaDiv);
            }
        } else {
            let validacaoCPFNaoEncontrado = document.querySelector('.card_boletim_aluno');
            validacaoCPFNaoEncontrado.style.setProperty('font-weight', 'bold');
            validacaoCPFNaoEncontrado.style.setProperty('color', 'red');
            validacaoCPFNaoEncontrado.style.setProperty('text-align', 'center');
            validacaoCPFNaoEncontrado.textContent = `CPF informado não está cadastrado.`;
            console.log("CPF Não Encontrado");
        }
    });
}

export default {
    init() {
        if (started) {
            return;
        }

        startStudentListModule();

        window.addEventListener('changepage', function(event) {
            // Handle page change if necessary
        });
    }
};
