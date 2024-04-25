# Projeto Sistema de gerenciamento acadêmico

Este README fornecerá instruções passo a passo sobre como baixar, instalar o Node.js no Windows e executar o projeto.

## Instalando o Node.js no Windows

1. **Baixe o instalador do Node.js:**

   Acesse o site oficial do Node.js em [nodejs.org](https://nodejs.org) e baixe o instalador para Windows.

2. **Execute o instalador:**

   Após o download ser concluído, execute o instalador clicando duas vezes no arquivo baixado (geralmente chamado `node-vX.X.X-x64.msi`, onde `X.X.X` é a versão do Node.js).

3. **Siga as instruções de instalação:**

   O instalador do Node.js fornecerá instruções passo a passo. Clique em "Next" para avançar através das etapas de instalação. Você pode aceitar as configurações padrão, a menos que tenha razões específicas para alterá-las.

4. **Verifique a instalação:**

   Após a conclusão da instalação, abra o prompt de comando do Windows e digite o seguinte comando para verificar se o Node.js e o npm (gerenciador de pacotes do Node.js) foram instalados corretamente:

   ```
   node -v
   npm -v
   ```

   Se ambos os comandos exibirem as versões do Node.js e do npm, respectivamente, a instalação foi bem-sucedida.

## Executando o projeto

1. **Instale as dependências:**

   Execute o seguinte comando, na raiz do projeto frontend, para instalar as dependências do projeto usando o npm:

   ```
   npm install
   ```

2. **Inicie o servidor de desenvolvimento:**

   Depois que todas as dependências forem instaladas, você pode iniciar o servidor de desenvolvimento usando o comando:

   ```
   npm run dev
   ```

   Este comando iniciará o servidor de desenvolvimento do Vite. Após a inicialização, você poderá acessar o projeto no navegador.

3. **Acesso ao projeto:**

   Abra um navegador da web e navegue até `http://localhost:8080` para visualizar o projeto em execução.

## Construção dos módulos

Para criar os módulos, alguns passos devem ser seguidos. Vamos exemplificar com a construção do módulo de EXEMPLO `Visualizar aluno`. 

Para tanto siga os passos:

1. Crie os modulos da página, em:
    
   `src/pages/aluno/visualizar_aluno.html`, 
   `src/pages/aluno/visualizar_aluno.js` 
   `src/pages/aluno/visualizar_aluno.css`.
   
   Estes módulos serão carregados junto com a página html.
   
   A página HTML em sí, deve ser um módulo independente do corpo do HTML.

   Jeito incorreto

   ```html
   <html>
      <head>
         ...
      </head>
      <body>
         ...
      </body>
   </html>

   ```

   Jeito correto
   
   ```html
   <div class="page-wrapper">
    <h1 class="text-primary">Visualizar aluno</h1>

    <div>
        /// Conteúdo da página
    </div>
   </div>

   ```
2. Adicione os arquivos no registro de rotas 

   `src/router/modules/index/js`.

   O aruivo de registro de rotas é um array. Uma coleção de dados com todas as rotas do sistema.

   Para esse exemplo, vamos fazer assim:

   ```js
   // O restante das rotas
   ...
   { 
		path: '/visualizar_aluno', 
		layout: 'dashboard', 
		permission: 'auth', 
		moduleHTML: () => import('/src/pages/aluno/visualizar_aluno.html?raw'), 
		moduleJS: () => import('/src/pages/aluno/visualizar_aluno.js'), 
	},
   ...
   // O restante das rotas
   ```
   Não esqueça de adicionar `?raw` para os arquivos html, senão o vite não consegue carregar esse módulo.
   
   O resultado disso será uma rota para o aluno que pode ser acessada na aplicação dessa forma:
   
   `http://localhost:8080/visualizar_aluno`

3. Link para a rota no menu lateral

   Bom, se o objetivo for ter esse módulo acessível no menu lateral, então você vai precisar alterar o layout do dashboard `src/layouts/dashboard.html`, adicionando um novo link no menu.

   ```html
   <li class="dashboard-layout-sidebar-menu-item">
      <a class="dashboard-layout-sidebar-menu-parent text-primary">
         <div class="sidebar-icon-wrapper">
            <span class="iconify-inline" data-icon="ic:outline-manage-accounts"></span>
         </div>
         <span class="sidebar-text-wrapper">Aluno</span>

         <div class="sidebar-icon-wrapper">
            <span class="iconify-inline dropdown-icon transition-all" data-icon="ic:round-keyboard-arrow-down"></span>
         </div>
      </a>
      <div class="dashboard-layout-sidebar-menu-children">
         <ul>
            //...RESTO DOS LINKS
            <li><a class="sidebar-text-wrapper" onclick="navigateToRoute(event, '/aluno/cadastro')">Cadastrar Aluno</a></li>
            //...RESTO DOS LINKS

         </ul>
      </div>
   </li>
   ```

## Consumindo serviços na aplicação

## Serviços no Frontend

Em um contexto de frontend, um serviço é uma peça fundamental da arquitetura de uma aplicação web. Um serviço é uma classe ou objeto JavaScript que encapsula uma funcionalidade específica e pode ser utilizado para executar tarefas como comunicação com um servidor, gerenciamento de estado, manipulação de dados, entre outras.

Os serviços são comumente utilizados para promover a reutilização de código e a separação de preocupações, seguindo os princípios do design de software modular e da arquitetura de software em camadas. Eles ajudam a manter o código limpo, organizado e facilmente mantido.

Alguns exemplos comuns de serviços no frontend incluem:

1. **Serviços de comunicação com o servidor**: Responsáveis por fazer requisições HTTP para o backend, enviar e receber dados, lidar com autenticação, etc.

2. **Serviços de gerenciamento de estado**: Responsáveis por gerenciar o estado da aplicação, armazenar e recuperar dados, sincronizar diferentes partes da aplicação, etc. Exemplos populares incluem Redux, Vuex (para Vue.js) e Context API (para React).

3. **Serviços de utilidade**: Fornecem funções utilitárias reutilizáveis, como formatação de datas, validação de entrada do usuário, manipulação de strings, etc.

4. **Serviços de autenticação e autorização**: Lidam com o processo de autenticação de usuários, gerenciamento de tokens de acesso, controle de acesso a recursos protegidos, etc.

5. **Serviços de terceiros**: Integram funcionalidades de terceiros em uma aplicação, como serviços de mapas, ferramentas de análise, sistemas de pagamento, etc.

Ao utilizar serviços no frontend, os desenvolvedores podem modularizar o código da aplicação, tornando-o mais fácil de entender, testar e manter. Isso também facilita a colaboração entre equipes, já que diferentes partes da aplicação podem ser desenvolvidas de forma independente e integradas por meio dos serviços.

Para o projeto, estamos iniciando com a criação dos serviços de utilitário HTTP, de forma estes serviços **SIMULEM** o consumo de uma API.

Como o projeto é frontend, somente, logo, este deve se comunicar com um servidor, que por sua vez, fornecerá endpoints para nossa aplicação. Essa prática é comumente utilizada para desacoplar um projeto fronted de um projeto backend. 

Separamos um pasta para os services em `src/services`. 

Adicione seus services nesse formato `src/service/aluno.service.js`.

```js
export const alunoService = {
    async visualisarDadosAluno(id) {
        return new Promise((resolve) => {
            setTimeout(() => {
                return resolve({
                    message: 'Dados retornados com sucesso',
                    data: {
                        name: 'Nome do aluno',
                        email: 'email@email.com',
                        ...RESTO DOS DADOS
                    },
                });
            }, 600);
        })
    },
};
```
Note que no service não é feita nenhum tipo de requisição HTTP, no entanto, retornamos uma `Promise` com timeout de 600 milisegundos, para simular o consumo de uma api com HTTP.

Chame esse service no seu módulo e utilize a vontade.

Em `src/pages/aluno/visualizar_aluno.js`:

```js
import { alunoService } from '/src/services/alunoService.service.js';

const meuButton = document.getElementById('meu_button');
const id = 1;

meuButton.addEventListener('click', async (event) => {
   event.preventDefault();
   
   //... RESTO DA LÓGICA
   const responseMockHTTP = await alunoService.visualisarDadosAluno(id);
   //... RESTO DA LÓGICA
});

```


## Conclusão

Agora você tem o Node.js instalado no seu sistema Windows e está pronto para executar o projeto. Siga as etapas fornecidas neste README e comece a desenvolver as páginas do sistema.
