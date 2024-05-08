# Programação de Funcionalidades

Implementação da aplicação descritas por meio dos requisitos codificados. 

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


<br>
<br>
<br>

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

<br>
<br>
<br>

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

<br>
<br>
<br>

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

<br>
<br>
<br>

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

<br>
<br>
<br>

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

<br>
<br>
<br>

[Utilize a estrutura abaixo para cada funcionalidade entregue na etapa]

### Título da funcionalidade

[Adicione imagem da funcionalidade/tela]


#### Requisito atendido

[RF-X: adicione a descrição do requisito atendido]


#### Artefatos da funcionalidade

[Adicione os nomes dos arquivos relacionados ao desenvolvimento da funcionalidade]


#### Estrutura de Dados

[Caso exista estrutura de dados, adicione aqui]


#### Instruções de acesso

[Adicione as orientações de acesso à funcionalidade]


#### Responsável

[Adicione nome do responsável pelo desenvolvimento da funcionalidade]




> **Links Úteis**:
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

