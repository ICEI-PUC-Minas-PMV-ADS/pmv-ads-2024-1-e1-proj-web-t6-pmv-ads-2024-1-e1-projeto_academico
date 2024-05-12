# Programação de Funcionalidades

Implementação da aplicação descritas por meio dos requisitos codificados. 

<!-- Parte da Tela de Login e CRUD de Alunos - Marcelly Thais Freitas Neves:  -->

### Tela de Login

![tela login](/documentos/img/telas/login.png)
##### *Tela de Login*


#### Requisito atendido

- RF-01: Deve ter uma tela de Login com distinção de perfil do usuário


#### Artefatos da funcionalidade

- [login/index.html](/codigo-fonte/src/pages/authentication/login/index.html)
- [login/index.css](/codigo-fonte/src/pages/authentication/login/index.css)
- [login/index.js](/codigo-fonte/src/pages/authentication/login/index.js)


#### Estrutura de Dados

![estrutura de dados](/documentos/img/telas/estrutura_dados_login.png)
##### *Estrutura de dados*


#### Instruções de acesso

1. Para executar o sistema localmente, é necessário a instalação do [Node.js](https://nodejs.org).
2. Após instalá-lo na sua máquina, execute o comando, na raiz do projeto:

    ```
    cd codigo-fonte && npm run dev
    ```

3. Abra um navegador da web e navegue até `http://localhost:8080` para visualizar o projeto em execução.
4. A tela de login é a primeira funcionalidade exibida pelo aplicativo.


#### Responsável
Marcelly Freitas



### Tela de recuperação de senha

![tela recuperação de senha](/documentos/img/telas/recuperar.png)
##### *Tela de Recuperação de Senha*


#### Requisito atendido

- RF-01: Deve ter uma tela de Login com distinção de perfil do usuário


#### Artefatos da funcionalidade

- [recovery/index.html](/codigo-fonte/src/pages/authentication/recovery/index.html)
- [recovery/index.css](/codigo-fonte/src/pages/authentication/recovery/index.css)
- [recovery/index.js](/codigo-fonte/src/pages/authentication/recovery/index.js)


#### Estrutura de Dados

Não possui. A ação é simulada como envio de email ao usuário para recuperação de senha.


#### Instruções de acesso

1. Para executar o sistema localmente, é necessário a instalação do [Node.js](https://nodejs.org).
2. Após instalá-lo na sua máquina, execute o comando, na raiz do projeto:

    ```
    cd codigo-fonte && npm run dev
    ```

3. Abra um navegador da web e navegue até `http://localhost:8080` para visualizar o projeto em execução.
4. Na tela de login, no link "Esqueceu sua senha? Recupere agora", clique em "Recupere agora", para acessar a tela de recuperação de senha.


#### Responsável
Marcelly Freitas



### Tela de Home/Dashboard

![tela recuperação de senha](/documentos/img/telas/home.png)
##### *Tela de Home/Dashboard*


#### Requisito atendido

- Não possui RF.


#### Artefatos da funcionalidade

- [home/index.html](/codigo-fonte/src/pages/home/index.html)
- [home/index.css](/codigo-fonte/src/pages/home/index.css)
- [home/index.js](/codigo-fonte/src/pages/home/index.js)


#### Estrutura de Dados

Não possui.


#### Instruções de acesso

1. Para executar o sistema localmente, é necessário a instalação do [Node.js](https://nodejs.org).
2. Após instalá-lo na sua máquina, execute o comando, na raiz do projeto:

    ```
    cd codigo-fonte && npm run dev
    ```

3. Abra um navegador da web e navegue até `http://localhost:8080` para visualizar o projeto em execução.
4. Após realizar o login é a primeira tela que aparece.


#### Responsável
Marcelly Freitas



### Tela com lista de alunos cadastrados

![lista de alunos](/documentos/img/telas/lista_aluno.png)
##### *Tela lista de alunos*


#### Requisito atendido

- RF-02: CRUD de Dados de Alunos (Deve ser possível cadastrar, editar, visualizar e excluir um Aluno)


#### Artefatos da funcionalidade

- [alunos/lista/index.html](/codigo-fonte/src/pages/aluno/lista/index.html)
- [alunos/lista/index.css](/codigo-fonte/src/pages/aluno/lista/index.css)
- [alunos/lista/index.js](/codigo-fonte/src/pages/aluno/lista/index.js)


#### Estrutura de Dados

![estrutura de dados](/documentos/img/telas/estrutura_dados_aluno.png)
##### *Estrutura de dados do aluno*


#### Instruções de acesso

1. Para executar o sistema localmente, é necessário a instalação do [Node.js](https://nodejs.org).
2. Após instalá-lo na sua máquina, execute o comando, na raiz do projeto:

    ```
    cd codigo-fonte && npm run dev
    ```

3. Abra um navegador da web e navegue até `http://localhost:8080` para visualizar o projeto em execução.
4. Após fazer login no sistema, acesse a opção de menu à esquerda "Cadastro de Alunos" para ter acesso a página com a lista de alunos.


#### Responsável
Marcelly Freitas



### Tela de cadastro de alunos

![cadastro de alunos](/documentos/img/telas/cadastro_aluno.png)
##### *Tela cadastro de alunos*


#### Requisito atendido

- RF-02: CRUD de Dados de Alunos (Deve ser possível cadastrar, editar, visualizar e excluir um Aluno)


#### Artefatos da funcionalidade

- [alunos/cadastro/index.html](/codigo-fonte/src/pages/aluno/cadastro/index.html)
- [alunos/cadastro/index.css](/codigo-fonte/src/pages/aluno/cadastro/index.css)
- [alunos/cadastro/index.js](/codigo-fonte/src/pages/aluno/cadastro/index.js)


#### Estrutura de Dados

![estrutura de dados](/documentos/img/telas/estrutura_dados_aluno.png)
##### *Estrutura de dados do aluno*


#### Instruções de acesso

1. Para executar o sistema localmente, é necessário a instalação do [Node.js](https://nodejs.org).
2. Após instalá-lo na sua máquina, execute o comando, na raiz do projeto:

    ```
    cd codigo-fonte && npm run dev
    ```

3. Abra um navegador da web e navegue até `http://localhost:8080` para visualizar o projeto em execução.
4. Após fazer login no sistema, acesse a opção de menu à esquerda "Cadastro de Alunos" para ter acesso a página com a lista de alunos.
5. Na tela com a lista de alunos, clique no botão superior direito "Cadastrar" para a acessar o formulário de cadastro.


#### Responsável
Marcelly Freitas



### Tela de edição de aluno

![edição de alunos](/documentos/img/telas/editar_aluno.png)
##### *Tela editar de alunos*


#### Requisito atendido

- RF-02: CRUD de Dados de Alunos (Deve ser possível cadastrar, editar, visualizar e excluir um Aluno)


#### Artefatos da funcionalidade

- [alunos/editar/index.html](/codigo-fonte/src/pages/aluno/editar/index.html)
- [alunos/editar/index.css](/codigo-fonte/src/pages/aluno/editar/index.css)
- [alunos/editar/index.js](/codigo-fonte/src/pages/aluno/editar/index.js)


#### Estrutura de Dados

![estrutura de dados](/documentos/img/telas/estrutura_dados_aluno.png)
##### *Estrutura de dados do aluno*


#### Instruções de acesso

1. Para executar o sistema localmente, é necessário a instalação do [Node.js](https://nodejs.org).
2. Após instalá-lo na sua máquina, execute o comando, na raiz do projeto:

    ```
    cd codigo-fonte && npm run dev
    ```

3. Abra um navegador da web e navegue até `http://localhost:8080` para visualizar o projeto em execução.
4. Após fazer login no sistema, acesse a opção de menu à esquerda "Cadastro de Alunos" para ter acesso a página com a lista de alunos.
5. Na tela com a lista de alunos, clique no botão designado na tabela para cada aluno (ícone de caneta), para ser redirecionado para a tela de edição.


#### Responsável
Marcelly Freitas



### Desativar e Reativar aluno no sistema

![desativar aluno](/documentos/img/telas/desativar_aluno.png)
##### *Função de desativar aluno*

![reativar aluno](/documentos/img/telas/reativar_aluno.png)
##### *Função de reativar aluno*


#### Requisito atendido

- RF-02: CRUD de Dados de Alunos (Deve ser possível cadastrar, editar, visualizar e excluir um Aluno)


#### Artefatos da funcionalidade

- [alunos/lista/index.html](/codigo-fonte/src/pages/aluno/lista/index.html)
- [alunos/lista/index.css](/codigo-fonte/src/pages/aluno/lista/index.css)
- [alunos/lista/index.js](/codigo-fonte/src/pages/aluno/lista/index.js)


#### Estrutura de Dados

![estrutura de dados](/documentos/img/telas/estrutura_dados_aluno.png)
##### *Estrutura de dados do aluno*


#### Instruções de acesso

1. Para executar o sistema localmente, é necessário a instalação do [Node.js](https://nodejs.org).
2. Após instalá-lo na sua máquina, execute o comando, na raiz do projeto:

    ```
    cd codigo-fonte && npm run dev
    ```

3. Abra um navegador da web e navegue até `http://localhost:8080` para visualizar o projeto em execução.
4. Após fazer login no sistema, acesse a opção de menu à esquerda "Cadastro de Alunos" para ter acesso a página com a lista de alunos.
5. Na tela com a lista de alunos, clique no botão designado na tabela para cada aluno (ícone de lixeira), para desativar o aluno.
6. Na tela com a lista de alunos, clique no botão designado na tabela para cada aluno (ícone de refresh), para reativar o aluno.


#### Responsável
Marcelly Freitas

<!-- Parte da Consulta ao Boletim - Fernando Moura:  -->

### Tela de Consulta do Boletim

![telaConsultaBoletim](/documentos/img/telaConsultaBoletim.png)


#### Requisito atendido

- RF-14: Alunos devem poder emitir boletins com suas notas por disciplina


#### Artefatos da funcionalidade

- [alunos/boletim/index.html](/codigo-fonte/src/pages/aluno/boletim/index.html)
- [alunos/boletim/index.css](/codigo-fonte/src/pages/aluno/boletim/index.css)
- [alunos/boletim/index.js](/codigo-fonte/src/pages/aluno/boletim/index.js)


#### Estrutura de Dados

- Dados foram inseridos dentro do próprio arquivo HTML para verificação da implementação.

![dadosConsultaBoletim](/documentos/img/estruturaDadosBoletim.png)


#### Instruções de acesso

1. Para executar o sistema localmente, é necessário a instalação do [Node.js](https://nodejs.org).
2. Após instalá-lo na sua máquina, execute o comando, na raiz do projeto:

    ```
    cd codigo-fonte && npm run dev
    ```

3. Abra um navegador da web e navegue até `http://localhost:8080` para visualizar o projeto em execução.
4. Após fazer login no sistema, acesse a opção de menu à esquerda "Consultar Boletim" para ter acesso a página com a as notas do boletim de um aluno.


#### Responsável

Fernando Vinicius Sousa Moura

<!-- Parte do CRUD de Turmas - Caio Araujo:  -->

### Telas de Cadastro, Inativação, Visualização de Turma e Matrícula

![telaCadastrarTurmas](/documentos/img/cadastrarTurmas.png)

![telaAtivarOuInativarTurmas](/documentos/img/ativarOuInativarTurmas.png)

![telaMatricularAluno](/documentos/img/matricularAluno.png)

![telaVisualizarTurma](/documentos/img/visualizarTurma.png)


#### Requisito atendido


- RF-05: CRUD de Turma (Deve ser possível cadastrar, editar, inserir Alunos, visualizar e excluir uma Turma)


#### Artefatos da funcionalidade


- [turmas/cadastrar/index.html](/codigo-fonte/src/pages/turmas/cadastrar/index.html)
- [turmas/cadastrar/index.css](/codigo-fonte/src/pages/turmas/cadastrar/index.css)
- [turmas/cadastrar/index.js](/codigo-fonte/src/pages/turmas/cadastrar/index.js)

- [turmas/ativar_inativar/index.html](/codigo-fonte/src/pages/turmas/ativar_inativar/index.html)
- [turmas/ativar_inativar/index.css](/codigo-fonte/src/pages/turmas/ativar_inativar/index.css)
- [turmas/ativar_inativar/index.js](/codigo-fonte/src/pages/turmas/ativar_inativar/index.js)

- [turmas/visualizar/index.html](/codigo-fonte/src/pages/turmas/visualizar/index.html)
- [turmas/visualizar/index.css](/codigo-fonte/src/pages/turmas/visualizar/index.css)
- [turmas/visualizar/index.js](/codigo-fonte/src/pages/turmas/visualizar/index.js)

- [turmas/matricula/index.html](/codigo-fonte/src/pages/turmas/matricula/index.html)
- [turmas/matricula/index.css](/codigo-fonte/src/pages/turmas/matricula/index.css)
- [turmas/matricula/index.js](/codigo-fonte/src/pages/turmas/matricula/index.js)


#### Estrutura de Dados

- Dados foram inseridos dentro do próprio arquivo HTML para verificação da implementação.

![dadosEstruturaTurma](/documentos/img/estruturaCadastrarTurmas.png)


#### Instruções de acesso

1. Para executar o sistema localmente, é necessário a instalação do [Node.js](https://nodejs.org).
2. Após instalá-lo na sua máquina, execute o comando, na raiz do projeto:

    ```
    cd codigo-fonte && npm run dev
    ```

3. Abra um navegador da web e navegue até `http://localhost:8080` para visualizar o projeto em execução.
4. Após fazer login no sistema, acesse a opção de menu à esquerda "Cadastrar turma" para ter acesso a página de cadastro de turmas.
5. Após fazer login no sistema, acesse a opção de menu à esquerda "Matricular Aluno" para ter acesso a página para matricular um aluno a uma turma.
6. Após fazer login no sistema, acesse a opção de menu à esquerda "Visualizar Turmas" para ter acesso a página para visualizar as turmas disponiveis e os detalhes.
7. Após fazer login no sistema, acesse a opção de menu à esquerda "Ativar/ Inativar Turma" para ter acesso a página ativar ou invativar uma turma especifica.

#### Responsável

Caio de Souza Araujo

<!-- Parte de Frequência - Brena Ferreira:  -->


### Tela Consulta de Frequência

![telaVisualizarFrequencia](/documentos/img/telas/visualizarFrequencia.png)

#### Requisito atendido
RF 10 - CRUD de Frequência (Deve ser possível registrar, editar, visualizar e excluir frequências de um Aluno).


#### Artefatos da funcionalidade

- [frequencia_form/index.html](/codigo-fonte/src/pages/turmas/frequencia_form/index.html)
- [frequencia_form/index.css](/codigo-fonte/src/pages/turmas/frequencia_form/index.css)
- [frequencia_form/index.js](/codigo-fonte/src/pages/turmas/frequencia_form/index.js)

#### Estrutura de Dados

![dadosVisualizarFrequencia](/documentos/img/telas/estruturaDadosVisualizarFrequencia.png)

#### Instruções de acesso

1. Para executar o sistema localmente, é necessária a instalação do Node.js.

2. Após instalá-lo na sua máquina, execute o comando, na raiz do projeto:

    ```
    cd codigo-fonte && npm run dev
    ```

3. Abra um navegador da web e navegue até http://localhost:8080 para visualizar o projeto em execução.

4. Após fazer login no sistema, acesse a opção de menu à esquerda "Lançar Frequência" para ter acesso à página de lançamento de frequências.

5. Após isso, irá abrir a tela com as informações das turmas para ser realizado o lançamento da frequência dos alunos que estão inseridos na determinada turma.


#### Responsável

Brena Ferreira

<!-- Parte de Lançamento de Notas - Kevin Lucas:  -->


### Tela Lançamento de Frequência

![telaLancarFrequencia](/documentos/img/telas/lancarFrequencia.png)

#### Requisito atendido
RF 10 - CRUD de Frequência (Deve ser possível registrar, editar, visualizar e excluir frequências de um Aluno).


#### Artefatos da funcionalidade

- [frequencia_lista/index.html](/codigo-fonte/src/pages/turmas/frequencia_lista/index.html)
- [frequencia_lista/index.css](/codigo-fonte/src/pages/turmas/frequencia_lista/index.css)
- [frequencia_lista/index.js](/codigo-fonte/src/pages/turmas/frequencia_lista/index.js)

#### Estrutura de Dados

![dadosLancarFrequencia](/documentos/img/telas/estruturaDadosLancarFrequencia.png)

#### Instruções de acesso

1. Para executar o sistema localmente, é necessária a instalação do Node.js.

2. Após instalá-lo na sua máquina, execute o comando, na raiz do projeto:

    ```
    cd codigo-fonte && npm run dev
    ```

3. Abra um navegador da web e navegue até http://localhost:8080 para visualizar o projeto em execução.

4. Após fazer login no sistema, acesse a opção de menu à esquerda "Lançar Frequência" para ter acesso à página de lançamento de frequências.

5. Após isso, irá abrir a tela com as informações das turmas para ser realizado o lançamento da frequência dos alunos que estão inseridos na determinada turma.

6. Será necessário clicar no botão Lançar Frequência, na turma desejada. Após isso, estará dísponivel a lista de alunos inseridos naquela turma para ser informado o status da frequência.


#### Responsável

Brena Ferreira


### Tela Lançamento/Consulta de Notas

![tela lancar notas](/documentos/img/lancarNotas.png) 

![tela lancar notas preenchido](/documentos/img/lancarNotasPreenchido.png)

#### Requisito atendido

RF - 11	CRUD de Notas (Deve ser possível lançar, editar, visualizar e excluir notas de um Aluno)


#### Artefatos da funcionalidade

- [notas_lista/index.html](/codigo-fonte/src/pages/turmas/notas_lista/index.html)                
- [notas_lista/index.css](/codigo-fonte/src/pages/turmas/notas_lista/index.css)
- [notas_lista/index.js](/codigo-fonte/src/pages/turmas/notas_lista/index.js)

- [notas_form/index.html](/codigo-fonte/src/pages/turmas/notas_form/index.html)                
- [notas_form/index.css](/codigo-fonte/src/pages/turmas/notas_form/index.css)
- [notas_form/index.js](/codigo-fonte/src/pages/turmas/notas_form/index.js)



#### Estrutura de Dados

- Dados foram inseridos dentro do próprio arquivo HTML para verificação da implementação.


#### Instruções de acesso

1. Para executar o sistema localmente, é necessária a instalação do Node.js.

2. Após instalá-lo na sua máquina, execute o comando, na raiz do projeto:

    ```
    cd codigo-fonte && npm run dev
    ```

3. Abra um navegador da web e navegue até http://localhost:8080 para visualizar o projeto em execução.

4. Após fazer login no sistema, acesse a opção de menu à esquerda "Lançar Notas" para ter acesso à página de lançamento de notas.

5. Após isso, irá abrir a tela com as informações das turmas para ser realizado o lançamento/edição das notas dos alunos que estão inseridos em determinada turma.


#### Responsável

Kevin Lucas
