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

<table>
    <thead> 
        <tr>
            <th>Caso de Teste</th>
            <th>
                <div>CT-002 - Testes Funcionalidades CRUD Aluno</div>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>RF-02</th>
            <th>CRUD de Dados de Alunos (Deve ser possível cadastrar, editar, visualizar e excluir um Aluno)</th>
        </tr>
        <tr>
            <td>Resultados obtidos</td>
            <td> 
                <ol>
                    <li>
                        Na tela inicial, está aparecendo a lista de alunos cadastrados e os botões de Editar, Desativar e Cadastrar estão funcionando corretamente:
                    </li>

![Crud frequencia](/documentos/img/telasBrena/telaAlunos.png)
                    <li>Após desativar o cadastro do aluno, é possível visualizar na lista de alunos, o botão de reativar o aluno novamente:</li>
![Crud frequencia](/documentos/img/telasBrena/desativarAluno.png)
                    <li>Os campos dos formulários de Cadastro e Edição de aluno estão recebendo as informações corretamente:</li>
![Crud frequencia](/documentos/img/telasBrena/cadastrarAluno.png)
![Crud frequencia](/documentos/img/telasBrena/editarAluno.png)
                    <li>Após cadastrar um novo aluno no sistema, é informada uma mensagem de sucesso e a lista de alunos é atualizada constando os dados do novo aluno:</li>
![Crud frequencia](/documentos/img/telasBrena/alunoCadastrado.png)
                </ol>  
            </td>
        </tr>
        <tr>
            <td>Responsável pela execução do caso de Teste</td>
            <td>Brena Ferreira</td>
        </tr>
    </tbody>
</table>


<table>
    <thead> 
        <tr>
            <th>Caso de Teste</th>
            <th>
                <div>CT-008 - Teste Funcionalidade Cancelamento de Matrícula</div>
                <div>CT-009 - Teste Funcionalidade Usuários autorizados devem conseguir cancelar matrícula de um aluno no sistema</div>
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>RF-03</th>
            <th>Deve ser possível desativar a matrícula de um aluno no sistema</th>
        </tr>
          <tr>
            <th>RF-07</th>
            <th>Usuários autorizados devem conseguir cancelar matrícula de um aluno no sistema</th>
        </tr>
        <tr>
            <td>Resultados obtidos</td>
            <td> 
                <ol>
                    <li>
                        Está sendo possível pesquisar o aluno pelo CPF, o campo de pesquisa está funcionando corretamente e está aparecendo a lista de turmas que o aluno está matriculado:
                    </li>

![Matricula](/documentos/img/telasBrena/cancelarMatricula.png)
                    <li>O botão de Cancelar Matrícula está funcionando corretamente e ao realizar a ação, é informada uma mensagem de sucesso:</li>
![Matricula](/documentos/img/telasBrena/botaoDesativarMatricula.png)
                    <li>O botão de Ativar Matrícula está funcionando corretamente e ao realizar a ação, é informada uma mensagem de sucesso:</li>
![Matricula](/documentos/img/telasBrena/botaoAtivarMatricula.png)
                    <li>O login do aluno não tem acesso ao menu Cancelar Matricula. Logo, apenas usuários autorizados podem Ativar, Desativar e Cancelar a matrícula de um aluno.</li>
![Matricula](/documentos/img/telasBrena/loginAluno.png)
                </ol>  
            </td>
        </tr>
        <tr>
            <td>Responsável pela execução do caso de Teste</td>
            <td>Brena Ferreira</td>
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
            <th>RF-01</th>
            <th>Tela de Login</th>
        </tr>
        <tr>
            <td>Resultados obtidos</td>
            <td> 
                <ol>
                    <li>Ao acessar o sistema e inserir credenciais válidas (usuário e senha corretos), o login foi realizado com sucesso e o usuário foi redirecionado para a página inicial do sistema (De acordo com seus níveis de acessos):
                        <br>
                        <img src="/documentos/img/telas/teste_tela_login_sucesso_aluno1.PNG" alt="Tela de Login Sucesso Aluno">
                        <br>
                        <img src="/documentos/img/telas/teste_tela_login_sucesso_aluno2.PNG" alt="Tela de Login Sucesso Aluno 2">
                        <br>
                        <img src="/documentos/img/telas/teste_tela_login_sucesso_professor1.png" alt="Tela de Login Sucesso Professor">
                        <br>
                        <img src="/documentos/img/telas/teste_tela_login_sucesso_professor2.png" alt="Tela de Login Sucesso Professor">
                    </li>
                                       <li>Ao acessar o sistema e inserir um email/senha incorretos, uma mensagem de erro foi exibida e o login não foi permitido:
                        <br>
                        <img src="/documentos/img/telas/teste_tela_login_falha1.PNG" alt="Tela de Login Falha">
                        <br>
                        <img src="/documentos/img/telas/teste_tela_login_falha2.PNG" alt="Tela de Login Falha 2">
                    </li>
                </ol>  
            </td>
        </tr>
        <tr>
            <td>Responsável pela execução do caso de Teste</td>
            <td>Kevin Lucas</td>
        </tr>
    </tbody>
</table>

<table>
    <thead> 
        <tr>
            <th>Caso de Teste</th>
            <th>CT-015 - Testes Funcionalidades de Visualização de Notas</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>RF-12</th>
            <th>Alunos devem conseguir visualizar as notas obtidas em suas disciplinas</th>
        </tr>
        <tr>
            <td>Resultados obtidos</td>
            <td> 
                <ol>
                    <li>Ao acessar o sistema e fazer login como aluno, na aba "Consultar Boletim", foi possível visualizar a lista de disciplinas matriculadas e suas respectivas notas:
                        <br>
                        <img src="/documentos/img/statusdoaluno.PNG" alt="Tela de Visualização de Notas">
                    </li>
                </ol>  
            </td>
        </tr>
        <tr>
            <td>Responsável pela execução do caso de Teste</td>
            <td>Kevin Lucas</td>
        </tr>
    </tbody>
</table>

<table>
    <thead> 
        <tr>
            <th>Caso de Teste</th>
            <th>CT-014 - Testes Funcionalidades emissao de certificado de conclusão e declaração de matricula</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>RF-08 e RF-09</th>
            <th>Emitir certificado de conclusão e Emitir certificado de matricula</th>
        </tr>
        <tr>
            <td>Resultados obtidos</td>
            <td> 
                <ol>
                    <li>Ao acessar o sistema com usuário de professor e clicar em emitir declaração de matrícula:
                        <br>
                        <img src="/documentos/img/telascaio/professorEmitirDeclaracao.png" alt="Emitir Declaração">
                    </li>
                    <li>Ao buscar um CPF inválido:
                        <br>
                        <img src="/documentos/img/telascaio/emitirDeclaracaoMatriculacpfinvalido.png" alt="CPF Inválido">
                    </li>
                    <li>Ao acessar o sistema com usuário de aluno e clicar em consultar boletim:
                        <br>
                        <img src="/documentos/img/telascaio/boletimEmitirCertificado.png" alt="Consultar Boletim">
                    </li>
                    <li>Se informar um CPF inválido:
                        <br>
                        <img src="/documentos/img/telascaio/consultaboletimcpfinvalid.png" alt="CPF Inválido">
                    </li>
                    <li>Ao buscar um CPF válido:
                        <br>
                        <img src="/documentos/img/telascaio/certificadoConclusaoValido.png" alt="CPF Válido">
                    </li>
                </ol>  
            </td>
        </tr>
        <tr>
            <td>Responsável pela execução do caso de Teste</td>
            <td>Caio Araujo</td>
        </tr>
    </tbody>
</table>

<table>
    <thead> 
        <tr>
            <th>Caso de Teste</th>
            <th>CT-015 - Testes Funcionalidades CRUD Notas</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>RF-05</th>
            <th>CRUD de Turmas</th>
        </tr>
        <tr>
            <td>Resultados obtidos</td>
            <td> 
                <ol>
                    <li>Ao acessar o sistema com usuário de professor e em cadastrar turma ebuscar sem informar dados o sistema ira listar as turmas:
                        <br>
                        <img src="/documentos/img/telasfernando/listarturmas.png" alt="Emitir Declaração">
                    </li>
                    <li>Ao buscar por uma turma especifica:
                        <br>
                        <img src="/documentos/img/telasfernando/buscaporturma.png" alt="CPF Inválido">
                    </li>
                    <li>Se buscar por turma invalida:
                        <br>
                        <img src="/documentos/img/telasfernando/turmainvalida.png" alt="Consultar Boletim">
                    </li>
                    <li>Quando clicar em editar:
                        <br>
                        <img src="/documentos/img/telasfernando/editarturma.png" alt="CPF Inválido">
                    </li>
                    <li>Ao clicar no botao cadastrar turmas:
                        <br>
                        <img src="/documentos/img/telasfernando/cadastrarturmas.png" alt="CPF Válido">
                    </li>
                </ol>  
            </td>
        </tr>
        <tr>
            <td>Responsável pela execução do caso de Teste</td>
            <td>Fernando Moura</td>
        </tr>
    </tbody>
</table>