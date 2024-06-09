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
        let minhaDiv = document.getElementById('cardBoletimAluno');
        minhaDiv.style.display = 'block'; // Faz a div aparecer
    });

    document.getElementById('searchForm').addEventListener('submit', function (event) {

        event.preventDefault();

        let valorSearch = document.getElementById('cpf').value;

        if (valorSearch == aluno.cpf) {
            let nomeAlunoHTML = `Aluno: ${aluno.nome}`
            nomeAluno.innerHTML = nomeAlunoHTML

            let anoLetivoHTML = `Ano: ${aluno.anoLetivo}`
            anoLetivo.innerHTML = anoLetivoHTML

            let turma1 = document.getElementById('turma1')
            let turma2 = document.getElementById('turma2')
            let turma3 = document.getElementById('turma3')
            let turma4 = document.getElementById('turma4')

            let primeiraTurma = aluno.turmas[0];
            let segundaTurma = aluno.turmas[1];
            let terceiraTurma = aluno.turmas[2];
            let quartaTurma = aluno.turmas[3];

            let nomeTurma1 = document.createElement('div');
            nomeTurma1.textContent = `${primeiraTurma.nome}`
            let nomeTurma2 = document.createElement('div');
            nomeTurma2.textContent = `${segundaTurma.nome}`
            let nomeTurma3 = document.createElement('div');
            nomeTurma3.textContent = `${terceiraTurma.nome}`
            let nomeTurma4 = document.createElement('div');
            nomeTurma4.textContent = `${quartaTurma.nome}`

            let notaTurma1 = document.createElement('div');
            notaTurma1.textContent = `${primeiraTurma.nota}`
            let notaTurma2 = document.createElement('div');
            notaTurma2.textContent = `${segundaTurma.nota}`
            let notaTurma3 = document.createElement('div');
            notaTurma3.textContent = `${terceiraTurma.nota}`
            let notaTurma4 = document.createElement('div');
            notaTurma4.textContent = `${quartaTurma.nota}`

            let situacaoTurma1 = document.createElement('div');
            situacaoTurma1.textContent = `${primeiraTurma.situacao}`
            let situacaoTurma2 = document.createElement('div');
            situacaoTurma2.textContent = `${segundaTurma.situacao}`
            let situacaoTurma3 = document.createElement('div');
            situacaoTurma3.textContent = `${terceiraTurma.situacao}`
            let situacaoTurma4 = document.createElement('div');
            situacaoTurma4.textContent = `${quartaTurma.situacao}`

            turma1.appendChild(nomeTurma1);
            turma2.appendChild(nomeTurma2);
            turma3.appendChild(nomeTurma3);
            turma4.appendChild(nomeTurma4);

            nota1.appendChild(notaTurma1);
            nota2.appendChild(notaTurma2);
            nota3.appendChild(notaTurma3);
            nota4.appendChild(notaTurma4);

            situacao1.appendChild(situacaoTurma1);
            situacao2.appendChild(situacaoTurma2);
            situacao3.appendChild(situacaoTurma3);
            situacao4.appendChild(situacaoTurma4);
        }
        else if (valorSearch !== aluno.cpf) {

            let validacaoCPFNaoEncontrado = document.querySelector('.card_boletim_aluno');
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

