
import './index.css';

export default {
    init() {
        console.log('turma notas');

        function salvarInformacoes() {
            const table = document.getElementById('tabelamateria');
            const rows = table.getElementsByTagName('tr');
            const data = [];
    
            for (let i = 1; i < rows.length; i++) {
                const cells = rows[i].getElementsByTagName('td');
                const aluno = cells[0].innerText;
                const prova = cells[1].innerText;
                const atividade = cells[2].innerText;
                const observacoes = cells[3].innerText;
    
                data.push({ aluno, prova, atividade, observacoes });
            }
    
            localStorage.setItem('dadosTabelaNotas', JSON.stringify(data));
            
            blinkButton('botaosalvar', () => {
                location.reload();
            });
        }
        window.salvarInformacoes = salvarInformacoes;

        function carregarInformacoes() {
            const dataString = localStorage.getItem('dadosTabelaNotas');
    
            if (dataString) {
                const data = JSON.parse(dataString);
                const table = document.getElementById('tabelamateria');
    
                table.getElementsByTagName('tbody')[0].innerHTML = '';
    
                data.forEach(item => {
                    const newRow = table.insertRow();
                    newRow.innerHTML = `<td contenteditable="true">${item.aluno}</td><td contenteditable="true">${item.prova}</td><td contenteditable="true">${item.atividade}</td><td contenteditable="true">${item.observacoes}</td>`;
                });
            }
        }
    
        carregarInformacoes();
      
        function cancelarEdicao() {
            blinkButton('botaocancelar', () => {
                location.reload();
            });
        }
        window.cancelarEdicao = cancelarEdicao;

        function blinkButton(buttonId, callback) {
            const button = document.getElementById(buttonId);
            button.classList.add('blink');
            setTimeout(() => {
                button.classList.remove('blink');
                if (callback) {
                    callback();
                }
            }, 300); // 300ms é o tempo total da animação
        }
    }
}

