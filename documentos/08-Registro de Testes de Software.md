# Registro de Testes de Software

Relatório com as evidências dos testes de software realizados na aplicação pela equipe, baseado no plano de testes pré-definido.

<!-- Os resultados dos testes funcionais realizados na aplicação são descritos a seguir. [Utilize a estrutura abaixo para cada caso de teste executado]

|Caso de Teste    | CT-X - Título Caso de Teste |
|:---|:---|
| Resultados obtidos | Descrever resultados do teste  |
| Responsável pela execução do caso de Teste | Nome do integrante da equipe |

[Inserir aqui as evidências de teste que podem ser apresentadas por print de telas ou por .gif de execução de teste] -->


<table>
    <thead> 
        <tr>
            <th>Caso de Teste</th>
            <th>CT-007 - Testes Funcionalidades CRUD Frequência</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>RF-10</th>
            <th>CRUD de Frequência (Deve ser possível registrar, editar, visualizar e excluir frequências de um Aluno)</th>
        </tr>
        <tr>
            <td>Resultados obtidos</td>
            <td> 
                <ol>
                    <li>Ao acessar o sistema com usúario de professor e clicar no menu em lançar frequência foi possível pesquisar turmas em:</li>

![Pesquisa Turma frequencia](/documentos/img/telas/teste_tela_pesquisar_turmas_lancar_frequencia.png)
                    <li>Ao abrir a turma aparecem os alunos cadastrados e é possível lançar Frequência, Falta ou informar que foi Justificado:</li>
![Pesquisa Turma frequencia](/documentos/img/telas/teste_tela_lancar_frequencia.png)
                    <li>Ao acessar o sistema com usúario de aluno e clicar no menu em consultar frequência, foi possível visualizar as frequências lançadas ao aluno:</li>
![Pesquisa Turma frequencia](/documentos/img/telas/teste_tela_consultar_frequencia_p.png)
                </ol>  
            </td>
        </tr>
        <tr>
            <td>Responsável pela execução do caso de Teste</td>
            <td>Marcelly Freitas</td>
        </tr>
    </tbody>
</table>


<table>
    <thead> 
        <tr>
            <th>Caso de Teste</th>
            <th>
                <div>CT-011 - Teste Funcionalidade Usuários autorizados devem conseguir cadastrar novas turmas no sistema</div>
                <div>CT-012 - Teste Funcionalidade Cadastrar/Matricular aluno em uma turma específica no sistema</div>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>RF-04</th>
            <th>Usuários autorizados devem conseguir cadastrar novas turmas no sistema</th>
        </tr>
        <tr>
            <th>RF-06</th>
            <th>Deve ser possível cadastrar/ matricular aluno em uma turma especifica no sistema</th>
        </tr>
        <tr>
            <td>Resultados obtidos</td>
            <td> 
                <ol>
                    <li>
                        Ao acessar o sistema com usúario de professor e clicar no menu em matricular aluno foi possível pesquisar turmas e escolher a turma onde o aluno será matrículado:
                    </li>

![Pesquisa Turma frequencia](/documentos/img/telas/teste_tela_matricular_aluno_turma.png)
                    <li>Ao clicar em matricular na turma aparece a lista de alunos que não se encontram matriculados na turma selecionada:</li>
![Pesquisa Turma frequencia](/documentos/img/telas/teste_tela_lista_aluno_nao_matriculados_turma.png)
                    <li>Ao clicar em matrícular o aluno selecionado é matriculado na turma:</li>
![Pesquisa Turma frequencia](/documentos/img/telas/teste_tela_mensagem_aluno_matriculado.png)
                    <li>O login do aluno não tem acesso ao menu matricular aluno. Logo, apenas usuários permitidos podem cadastrar/matricular alunos nas turmas:</li>
![Pesquisa Turma frequencia](/documentos/img/telas/teste_login_aluno_nao_tem_permissao_matricular-aluno.png)
                </ol>  
            </td>
        </tr>
        <tr>
            <td>Responsável pela execução do caso de Teste</td>
            <td>Marcelly Freitas</td>
        </tr>
    </tbody>
</table>

