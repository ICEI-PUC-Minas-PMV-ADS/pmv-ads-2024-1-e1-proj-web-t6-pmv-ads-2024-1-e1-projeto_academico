# Especificação do Projeto

## Perfis de Usuários

<table>
    <tbody>
        <tr align=center>
            <th colspan="2">Perfil 1: Professor Autônomo</th>
        </tr>
        <tr>
            <td width="150px"><b>Descrição</b></td>
            <td width="600px">Profissional independente que oferece aulas particulares ou em pequenos grupos, especializado em uma disciplina específica.</td>
        </tr>
        <tr>
            <td><b>Necessidades</b></td>
            <td>
                <ol>
                    <li>Autenticar no sistema</li>
                    <li>Gestão de alunos</li>
                    <li>Gestão de turmas</li>
                    <li>Gestão de frequência</li>
                    <li>Gestão de notas</li>
                    <li>Gestão de matrículas</li>
                    <li>Emissão de declarações e certificados</li>
                </ol> 
            </td>
        </tr>
    </tbody>
</table>

<table>
    <tbody>
        <tr align=center>
            <th colspan="2">Perfil 2: Aluno</th>
        </tr>
        <tr>
            <td width="150px"><b>Descrição</b></td>
            <td width="600px">Destinatários finais dos serviços oferecidos pelos professores autônomos.</td>
        </tr>
        <tr>
            <td><b>Necessidades</b></td>
            <td>
                <ol>
                    <li>Autenticar no sistema</li>
                    <li>Acompanhar notas e status (aprovado, reprovado, recuperação)</li>
                    <li>Acompanhar frequência</li>
                    <li>Emissão de boletim acadêmico </li>
                </ol> 
            </td>
        </tr>
    </tbody>
</table>


## Histórias de Usuários


<table>
    <thead>
        <tr>
            <th>Eu como ... [QUEM]</th>        
            <th>... Quero/desejo ... [O QUE]</th>        
            <th>... para ... [PORQUE]</th>        
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Professor Autônomo</td>
            <td>Autenticar no sistema por meio de credenciais pessoais</td>
            <td>Garantir que terei acesso às informações pertinentes a um docente.</td>
        </tr>
        <tr>
            <td>Aluno</td>
            <td>Autenticar no sistema por meio de credenciais pessoais</td>
            <td>Garantir que terei acesso às informações pertinentes a um discente.</td>
        </tr>
        <tr>
            <td>Professor Autônomo</td>
            <td>Visualizar as ações disponíveis no sistema por meio da tela inicial</td>
            <td>Centralizar as ações em um único lugar facilitando assim o uso do sistema.</td>
        </tr>
        <tr>
            <td>Professor Autônomo</td>
            <td>Cadastrar e atualizar informações das turmas referentes às disciplinas que serão lecionadas durante os cursos</td>
            <td>Ter um controle mais assertivo e organizado sobre as turmas dos cursos ministrados</td>
        </tr>
        <tr>
            <td>Professor Autônomo</td>
            <td>Realizar o cadastro de um novo aluno</td>
            <td>Guardar no sistema as informações cadastrais do mesmo e orquestrar os trâmites necessários para início das aulas.</td>
        </tr>
        <tr>
            <td>Professor Autônomo</td>
            <td>Ativar ou inativar o cadastro de um aluno</td>
            <td>Para sinalizar o status de um discente referente ao seu vínculo com a instituição.</td>
        </tr>
        <tr>
            <td>Professor Autônomo</td>
            <td>Criar turmas referentes aos cursos que serão ministrados</td>
            <td>Ter um maior controle e organização quanto às turmas formadas em que irei lecionar.</td>
        </tr>
        <tr>
            <td>Professor Autônomo</td>
            <td>Vincular um aluno à uma turma criada</td>
            <td>Para que o aluno seja matriculado nas disciplinas que se referem às suas necessidades.</td>
        </tr>
        <tr>
            <td>Professor Autônomo</td>
            <td>Lançar as presenças dos alunos de acordo com os dias em que foram ministradas cada aula</td>
            <td>Manter um registro da frequência dos discentes nas disciplinas ministradas e acompanhar se eles terão a participação mínima necessária para finalização.</td>
        </tr>
        <tr>
            <td>Aluno</td>
            <td>Consultar as presenças em cada dia de aula e acompanhar o seu status geral de frequência</td>
            <td>Acompanhar a assiduidade e verificar se não ultrapassou o número máximo de faltas permitidas.</td>
        </tr>
        <tr>
            <td>Professor Autônomo</td>
            <td>Lançar as notas referentes a avaliações e trabalhos realizados junto às turmas e disciplinas em que lecionei</td>
            <td>Manter atualizado o registro do desempenho de cada aluno nas disciplinas que foram ministradas.</td>
        </tr>
        <tr>
            <td>Aluno</td>
            <td>Consultar as notas referentes a avaliações e trabalhos realizados junto às turmas e disciplinas em que participei</td>
            <td>Acompanhar o meu desempenho nas disciplinas e verificar se obtive a evolução necessária para ser aprovado.</td>
        </tr>
        <tr>
            <td>Aluno</td>
            <td>Emitir uma declaração de matrícula junto ao curso que estou fazendo</td>
            <td>Utilizar o documento para adquirir benefícios que estão disponíveis a estudantes.</td>
        </tr>
        <tr>
            <td>Aluno</td>
            <td>Visualizar o boletim com as notas por disciplina que foram ministradas</td>
            <td>Verificar o meu desempenho e evolução em cada um dos assuntos que estudei durante o curso.</td>
        </tr>
        <tr>
            <td>Aluno</td>
            <td>Solicitar o cancelamento da minha matrícula junto as turmas em que estou vinculado e inativação do meu cadastro</td>
            <td>Interromper o andamento do meu curso e encerrar minhas responsabilidades financeiras e administrativas junto à instituição autônoma de ensino.</td>
        </tr>
        <tr>
            <td>Professor Autônomo</td>
            <td>Visualizar de forma simples os alunos que já completaram toda grade curricular</td>
            <td>Sinalizar os discentes que estão prontos para emissão de certificado e graduação no curso.</td>
        </tr>
        <tr>
            <td>Aluno</td>
            <td>Emitir o certificado de conclusão do curso e poder baixar o arquivo em minha máquina</td>
            <td>Obter o documento oficial que comprova a minha conclusão e aptidão adquirida por meio do curso finalizado.</td>
        </tr>
    </tbody>
</table>

## Requisitos do Projeto

### Requisitos Funcionais

<table>
    <thead>
        <tr>
            <th>ID</th>        
            <th>Descrição</th>        
            <th>Prioridade</th>        
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>RF- 01</td>
            <td>Deve ter uma tela de Login com distinção de perfil do usuário</td>
            <td>Alta</td>
        </tr>
        <tr>
            <td>RF- 02</td>
            <td>CRUD de Dados de Alunos (Deve ser possível cadastrar, editar, visualizar e excluir um Aluno)</td>
            <td>Alta </td>
        </tr>
        <tr>
            <td>RF- 03</td>
            <td>Deve ser possível desativar a matrícula de um aluno no sistema</td>
            <td>Média</td>
        </tr>
        <tr>
            <td>RF- 04</td>
            <td>Usuários autorizados devem conseguir cadastrar novas turmas no sistema</td>
            <td>Baixa</td>
        </tr>
        <tr>
            <td>RF- 05</td>
            <td>CRUD de Turma (Deve ser possível cadastrar, editar, inserir Alunos, visualizar e excluir uma Turma)</td>
            <td>Alta</td>
        </tr>
        <tr>
            <td>RF- 06</td>
            <td>Deve ser possível cadastrar/ matricular aluno em uma turma especifica no sistema</td>
            <td>Baixa</td>
        </tr>
        <tr>
            <td>RF- 07</td>
            <td>Usuários autorizados devem conseguir cancelar matrícula de um aluno no sistema</td>
            <td>Alta</td>
        </tr>
        <tr>
            <td>RF- 08</td>
            <td>Emitir Declaração de Matrícula</td>
            <td>Média</td>
        </tr>
        <tr>
            <td>RF- 09</td>
            <td>Usuários autorizados devem poder emitir certificados ou diplomas para os alunos que concluíram com sucesso o curso</td>
            <td>Média</td>
        </tr>
        <tr>
            <td>RF- 10</td>
            <td>CRUD de Frequência (Deve ser possível registrar, editar, visualizar e excluir frequências de um Aluno)</td>
            <td>Alta</td>
        </tr>
        <tr>
            <td>RF- 11</td>
            <td>CRUD de Notas (Deve ser possível lançar, editar, visualizar e excluir notas de um Aluno)</td>
            <td>Alta</td>
        </tr>
        <tr>
            <td>RF- 12</td>
            <td>Alunos devem conseguir visualizar as notas obtidas em suas disciplinas</td>
            <td>Baixa</td>
        </tr>
        <tr>
            <td>RF- 13</td>
            <td>Deve ser possível visualizar o status do aluno (Aprovado/Cursando/Reprovado)</td>
            <td>Média</td>
        </tr>
        <tr>
            <td>RF- 14</td>
            <td>Alunos devem poder emitir boletins com suas notas por disciplina</td>
            <td>Baixa</td>
        </tr>
        <tr>
            <td>RF- 15</td>
            <td>O sistema deve sinalizar quando um aluno está finalizando o curso para poder emitir o certificado</td>
            <td>Baixa</td>
        </tr>
        <tr>
            <td>RF- 16 </td>
            <td>Deve ser possível personalizar os perfis de usuários com diferentes níveis de acesso e permissões</td>
            <td>Alta</td>
        </tr>
    </tbody>
</table>

**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

<table>
    <thead>
        <tr>
            <th>ID</th>        
            <th>Descrição</th>        
            <th>Prioridade</th>        
        </tr>
    </thead>
    <tbody>
     <tr>
            <td>RNF-01</td>
            <td>O sistema deve garantir a segurança dos dados dos alunos e usuários</td>
            <td>Alta</td>
        </tr>
        <tr>
            <td>RNF-02</td>
            <td>A interface do usuário deve ser intuitiva e de fácil utilização</td>
            <td>Média</td>
        </tr>
        <tr>
            <td>RNF-03</td>
            <td>O sistema deve ser compatível com diferentes dispositivos e navegadores web</td>
            <td>Alta</td>
        </tr>
        <tr>
            <td>RNF-04</td>
            <td>O código deve ser bem estruturado e documentado para fácil manutenção.</td>
            <td>Alta</td>
        </tr>
    </tbody>
</table>

**Prioridade: Alta / Média / Baixa. 

