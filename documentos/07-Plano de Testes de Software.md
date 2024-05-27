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

<table>
    <thead> 
        <tr>
            <th>Caso de Teste</th>
            <th>CT-003 - Testes Funcionalidades Login</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Requisitos Associados</td>
            <td>RF-01 Tela de Login</td>
        </tr>
        <tr>
            <td>Objetivo do Teste</td>
            <td>Verificar se o processo de login de usuário está funcionando corretamente, permitindo que os usuários acessem suas contas com credenciais válidas.</td>
        </tr>
        <tr>
            <td>Passos</td>
            <td>
                <ol>
                    <li>Testar o fluxo de autenticação de usuário, inserindo informações de login corretas e verificando se o acesso é concedido ao sistema.</li>
                </ol> 
            </td>
        </tr>
        <tr>
            <td>Critérios de êxito</td>
            <td>
                <ol>
                    <li>Validação dos dados de acesso do usuário.</li>
                </ol> 
            </td>
        </tr>
        <tr>
            <td>Responsável pela elaborar do caso de Teste</td>
            <td>Marcelly Freitas</td>
        </tr>
    </tbody>
</table>

<table>
    <thead> 
        <tr>
            <th>Caso de Teste</th>
            <th>CT-004 - Testes Funcionalidades Consultar Boletim </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Requisitos Associados</td>
            <td>RF-14 Alunos devem poder emitir boletins com suas notas por disciplina</td>
        </tr>
        <tr>
            <td>Objetivo do Teste</td>
            <td>Verificar se o processo de consulta às notas do aluno estão disponíveis de acordo com o aluno consultado.</td>
        </tr>
        <tr>
            <td>Passos</td>
            <td>
                <ol>
                    <li>Acessar o menu "Consultar Boletim"</li>
                    <li>Informar o CPF do aluno e clicar no botão de "Pesquisar"</li>
                    <li>Verificar as notas disponíveis por cada turma que o aluno se matriculou, caso estejam disponíveis.</li>
                </ol> 
            </td>
        </tr>
        <tr>
            <td>Critérios de êxito</td>
            <td>
                <ol>
                    <li>Validações do campo em que é inserido o CPF.</li>
                    <li>Exibição das notas de acordo com as turmas em que o aluno é matriculado.</li>
                    <li>Devem ser exibidas notas somente já lançadas.</li>
                </ol> 
            </td>
        </tr>
        <tr>
            <td>Responsável pela elaborar do caso de Teste</td>
            <td>Fernando Moura</td>
        </tr>
    </tbody>
</table>

<table>
    <thead> 
        <tr>
            <th>Caso de Teste</th>
            <th>CT-005 - Testes Funcionalidades Emitir Declaração de Matrícula </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Requisitos Associados</td>
            <td>RF-08 Emitir Declaração de Matrícula</td>
        </tr>
        <tr>
            <td>Objetivo do Teste</td>
            <td>Verificar se o processo de emissão de declaração de matrícula está sendo executado de forma satisfatória.</td>
        </tr>
        <tr>
            <td>Passos</td>
            <td>
                <ol>
                    <li>Acessar o menu "Emitir Declaração de Matrícula"</li>
                    <li>Informar o CPF do aluno e clicar no botão de "Pesquisar"</li>
                    <li>Caso necessário realizar a impressão, clicar em "Imprimir"</li>
                </ol> 
            </td>
        </tr>
        <tr>
            <td>Critérios de êxito</td>
            <td>
                <ol>
                    <li>Validações do campo em que é inserido o CPF.</li>
                    <li>Verificar se o documento gerado para visualização da declaração contém os dados corretos do aluno.</li>
                    <li>Verificar se ao clicar em "Imprimir" está sendo redirecionado para uma nova aba de impressão com o documento gerado.</li>
                </ol> 
            </td>
        </tr>
        <tr>
            <td>Responsável pela elaborar do caso de Teste</td>
            <td>Fernando Moura</td>
        </tr>
    </tbody>
</table>

<table>
    <thead> 
        <tr>
            <th>Caso de Teste</th>
            <th>CT-006 - Testes Funcionalidades Emitir Certificado de Conclusão</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Requisitos Associados</td>
            <td>RF-09 Usuários autorizados devem poder emitir certificados ou diplomas para os alunos que concluíram com sucesso o curso</td>
        </tr>
        <tr>
            <td>Objetivo do Teste</td>
            <td>Verificar se o processo de emissão do certificado de conclusão está sendo executado de forma satisfatória.</td>
        </tr>
        <tr>
            <td>Passos</td>
            <td>
                <ol>
                    <li>Acessar o menu "Certificado de Conclusão"</li>
                    <li>Informar o CPF do aluno e clicar no botão de "Pesquisar"</li>
                    <li>Caso necessário realizar a impressão, clicar em "Imprimir"</li>
                </ol> 
            </td>
        </tr>
        <tr>
            <td>Critérios de êxito</td>
            <td>
                <ol>
                    <li>Validações do campo em que é inserido o CPF.</li>
                    <li>Verificar se o documento gerado para visualização da declaração contém os dados corretos do aluno.</li>
                    <li>Verificar se o documento gerado é referente somente às turmas que o aluno de fato concluiu.</li>
                    <li>Verificar se ao clicar em "Imprimir" está sendo redirecionado para uma nova aba de impressão com o documento gerado.</li>
                </ol> 
            </td>
        </tr>
        <tr>
            <td>Responsável pela elaborar do caso de Teste</td>
            <td>Fernando Moura</td>
        </tr>
    </tbody>
</table>

<table>
    <thead> 
        <tr>
            <th>Caso de Teste</th>
            <th>CT-007 - Testes Funcionalidades CRUD Frequência</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Requisitos Associados</td>
            <td>RF 10 - CRUD de Frequência (Deve ser possível registrar, editar, visualizar e excluir frequências de um Aluno)</td>
        </tr>
        <tr>
            <td>Objetivo do Teste</td>
            <td>Deve ser possível cadastrar, editar, visualizar e excluir as freqências de um Aluno.</td>
        </tr>
        <tr>
            <td>Passos</td>
            <td>
                <ol>
                    <li>Acessar o menu de Lançamento de Frequência</li>
                    <li>Verificar se ao pesquisar as turmas, está aparecendo as turmas cadastradas.</li>
                    <li>Verificar se ao clicar no botão "Lançar Frequência", está sendo direcionado para a tela de Lançamento de Frequência.</li>
                    <li>Verificar se o campo de Presença, Falta e Observação está habilitado para receber informações.</li>
                    <li>Verificar se os botões de "Cancelar" e "Salvar" estão funcionando.</li>
                    <li>Verificar se os dados informados da frequência do aluno estão ficando salvos.</li>
                </ol> 
            </td>
        </tr>
        <tr>
            <td>Critérios de êxito</td>
            <td>
                <ol>
                    <li>Validação do campo de pesquisar turmas.</li>
                    <li>Validação do botão de Lançar Frequência.</li>
                    <li>Validação do campo de Presença, Falta e Observação.</li>
                    <li>Validação dos botões de Salvar e Cancelar.</li>
                    <li>Após o lançamento da frequência, a informação deverá ser salva e informada na aba de Consultar Frequência.</li>
                </ol> 
            </td>
        </tr>
        <tr>
            <td>Responsável pela elaborar do caso de Teste</td>
            <td>Brena Ferreira</td>
        </tr>
    </tbody>
</table>

 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
