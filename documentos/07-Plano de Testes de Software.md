# Plano de Testes de Software

[Apresente os cenários de testes a serem utilizados na realização dos testes da aplicação. Escolha cenários de testes que demonstrem os requisitos sendo atendidos. ]

Os testes funcionais a serem realizados na aplicação são descritos a seguir. [Utilize a estrutura abaixo para cada caso de teste]

|Caso de Teste    | CT-X - Título Caso de Teste |
|:---|:---|
| Requisitos Associados | RF-X |
| Objetivo do Teste | Descrição do objetivo do teste |
| Passos | Indicar passos para a execução do teste |
| Critérios de êxito | Indicar os critérios de êxito  |
| Responsável pela elaborar do caso de Teste | Nome do integrante da equipe |


<table>
    <thead> 
        <tr>
            <th>Caso de Teste</th>
            <th>CT-001 - Testes Funcionalidades CRUD Turma</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Requisitos Associados</td>
            <td>RF-05 CRUD de Turma (Deve ser possível cadastrar, editar, inserir Alunos, visualizar e excluir uma Turma)</td>
        </tr>
        <tr>
            <td>Objetivo do Teste</td>
            <td>Verificar todo o processo de cadastro, visualização, exclusão e inserção de alunos em turmas.</td>
        </tr>
        <tr>
            <td>Passos</td>
            <td>
                <ol>
                    <li>Acessar a tela inicial e clicar em Turmas > Cadastrar Turmas.</li>
                    <li>Preencher os campos e clicar em cadastrar para que uma nova turma seja cadastrada.</li>
                    <li>Voltar para a tela de lista de turmas e verificar se a turma cadastrada está presente.</li>
                    <li>Encontrar a turma cadastrada na lista, clicar em editar para alterar alguma informação da turma desejada.</li>
                    <li>Verificar a turma cadastrada na lista e clicar em desativar. A turma não poderá mais ser editada.</li>
                    <li>Acessar a tela inicial e clicar em Turmas > Matricular Aluno.</li>
                    <li>Selecionar o aluno desejado na lista de alunos e clicar em matricular na turma desejada.</li>
                    <li>Clicar em visualizar turmas para verificar os alunos em cada turma e excluir o aluno da turma desejada.</li>
                </ol> 
            </td>
        </tr>
        <tr>
            <td>Critérios de Êxito</td>
            <td>
                <ol>
                    <li>Deve Ser possível cadastrar e visualizar uma turma.</li>
                    <li>Deve ser possível incluir um aluno na turma desejada.</li>
                    <li>Deve ser possível excluir um aluno da turma desejada.</li>
                    <li>Deve ser possível desativar uma turma, tornando-a impossível de editar.</li>
                    <li>Deve ser possível verificar os alunos que estão cadastrados em cada turma.</li>
                </ol> 
            </td>
        </tr>
        <tr>
            <td>Responsável pela Elaboração do Caso de Teste</td>
            <td>Caio Araujo</td>
        </tr>
    </tbody>
</table>

<table>
    <thead> 
        <tr>
            <th>Caso de Teste</th>
            <th>CT-002 - Testes Funcionalidades CRUD Aluno</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Requisitos Associados</td>
            <td>RF-02 CRUD de Dados de Alunos (Deve ser possível cadastrar, editar, visualizar e excluir um Aluno)</td>
        </tr>
        <tr>
            <td>Objetivo do Teste</td>
            <td>Deve ser possível cadastrar, editar, visualizar e excluir um Aluno.</td>
        </tr>
        <tr>
            <td>Passos</td>
            <td>
                <ol>
                    <li>Acessar o menu de cadastro de alunos.</li>
                    <li>Deve ser possível visualizar uma lista de alunos.</li>
                    <li>Deve ser possível clicar no botão 'cadastrar' para acessar o formulário de cadastro de aluno.</li>
                    <li>Deve ser possível visualizar e preencher todos os campos do formulário de cadastro de aluno.</li>
                    <li>Deve ser possível cadastrar somente após o preenchimento de todos os campos obrigatórios.</li>
                    <li>Após o preenchimento do formulário, deve ser possível clicar no botão 'Cadastrar' para finalizar o cadastro do aluno.</li>
                    <li>Após a finalização do cadastro, o usuário deve ser redirecionado para a lista de alunos com a mensagem de sucesso.</li>
                    <li>Na lista de alunos, deve ser possível clicar no botão 'editar' (ícone de caneta) para realizar alterações no cadastro do aluno.</li>
                    <li>Na lista de alunos, deve ser possível clicar no botão 'desativar' (ícone de lixeira) para realizar a desativação do aluno.</li>
                    <li>Na lista de alunos, deve ser possível clicar no botão 'reativar' (ícone de refresh) para realizar a reativação do aluno.</li>
                </ol> 
            </td>
        </tr>
        <tr>
            <td>Critérios de êxito</td>
            <td>
                <ol>
                    <li>Validação dos campos do formulário de cadastro do aluno.</li>
                    <li>Validação dos campos do formulário ao editar o cadastro do aluno.</li>
                    <li>Após cadastrar o aluno, o mesmo deve aparecer na lista de alunos.</li>
                    <li>Após editar o cadastro do aluno as alterações devem ficar salvas no cadastro.</li>
                    <li>Após desativar o cadastro do aluno, deve ser possível visualizar a na lista de alunos o botão de reativar aluno.</li>
                    <li>Após reativar o cadastro do aluno, deve ser possível visualizar a na lista de alunos o botão de desativar aluno.</li>
                </ol> 
            </td>
        </tr>
        <tr>
            <td>Responsável pela elaborar do caso de Teste</td>
            <td>Marcelly Freitas</td>
        </tr>
    </tbody>
</table>
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
