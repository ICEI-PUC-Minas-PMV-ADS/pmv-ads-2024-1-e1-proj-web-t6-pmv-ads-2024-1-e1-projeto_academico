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
        anoLetivo: 2024,
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

    document.getElementById('searchButtonDeclaracao').addEventListener('click', function() {
        let minhaDiv = document.getElementById('identificadorEmissaoDeclaracao');
        minhaDiv.style.display = 'flex'; // Faz a div aparecer
    });

    document.getElementById('searchFormDeclaracao').addEventListener('submit', function (event) {

        event.preventDefault();

        let valorSearchDeclaracao = document.getElementById('cpfDeclaracao').value;

        if (valorSearchDeclaracao == aluno.cpf) {
            let nomeAlunoDeclaracaoHTML = `${aluno.nome}`
            nomeAlunoDeclaracao.innerHTML = nomeAlunoDeclaracaoHTML

            let anoLetivoDeclaracaoHTML = `${aluno.anoLetivo}`
            anoLetivoDeclaracao.innerHTML = anoLetivoDeclaracaoHTML

            let turmaDeclaracao = document.getElementById('turmaDeclaracao')

            let primeiraTurma = aluno.turmas[0];

            let nomeTurma1 = document.createElement('div');
            nomeTurma1.textContent = `${primeiraTurma.nome}`

            let notaTurma1 = document.createElement('div');
            notaTurma1.textContent = `${primeiraTurma.nota}`

            let situacaoTurma1 = document.createElement('div');
            situacaoTurma1.textContent = `${primeiraTurma.situacao}`

            turmaDeclaracao.appendChild(nomeTurma1);
        }
        else if (valorSearchDeclaracao !== aluno.cpf) {

            let validacaoCPFNaoEncontrado = document.querySelector('.emissaoDeclaracao');
            validacaoCPFNaoEncontrado.style.setProperty('font-weight','bold');
            validacaoCPFNaoEncontrado.style.setProperty('color','red');
            validacaoCPFNaoEncontrado.textContent = `CPF informado não está cadastrado.`;
            console.log("CPF Não Encontrado")
        }
    })

}

export default {
    init() {
        if (started) {
            return;
        }

        startStudentListModule();

        window.addEventListener('changepage', function (event) {
        });
    }
}

