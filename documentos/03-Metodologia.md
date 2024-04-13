
## Metodologia

Esta seção descreve a organização da equipe para a execução das tarefas do projeto e as ferramentas utilizadas para a manutenção dos códigos e demais artefatos.


### Gerenciamento de Projeto

O desenvolvimento da aplicação seguirá o protocolo HTTP como base, empregando a linguagem de marcação HTML5 para estruturação, juntamente com CSS para estilização. A codificação da aplicação será conduzida em JavaScript, fazendo uso da plataforma Visual Studio Code. O controle de versão do projeto será realizado através do Git, hospedado no repositório GitHub. Quanto à abordagem de gestão, optou-se pela metodologia ágil SCRUM.

### Lista de Ambientes de Trabalho 
Os elementos do projeto são gerados em diferentes plataformas, e a relação entre os ambientes e suas respectivas funções é detalhada na tabela abaixo:

<table width="100%">
  <tr>
    <th>Ambiente</th>
    <th>Plataforma</th>
    <th>Link de Acesso</th>
  </tr>
  <tr>
    <td>Repositório de código fonte</td>
    <td>GitHub</td>
    <td>https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t6-pmv-ads-2024-1-e1-projeto_academico/tree/main/codigo-fonte</td>
  </tr>
  <tr>
    <td>Documentos do projeto</td>
    <td>GitHub</td>
    <td>https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e1-proj-web-t6-pmv-ads-2024-1-e1-projeto_academico/tree/main/documentos</td>
  </tr>
    <tr>
    <td>Projeto de Interface e Wireframes</td>
    <td>Figma</td>
    <td>https://www.figma.com/file/xrGiza6A09orfFahLinKxq/Gest%C3%A3o-Acad%C3%AAmica?type=design&node-id=1%3A359&mode=design&t=VETJNO4vXttPCAZ8-1</td>
  </tr>
    <tr>
    <td>Gerenciamento do Projeto</td>
    <td>Trello</td>
    <td>https://trello.com/b/yVH6ltu6/backlog</td>
  </tr>
</table>

### Controle de Versão 

No projeto, foi escolhido o Git como a ferramenta de controle de versão, enquanto o Github foi utilizado para hospedar o repositório. 

Para nomear os ramos do projeto, adotamos a seguinte convenção: 

<ul>
  <li>Master: refere-se à versão do software que já foi testada e é considerada estável.</li>
  <li>Instável: representa uma versão que passou por testes, mas ainda não é estável devido a problemas identificados.</li>
  <li>Homologação: indica a versão atualmente em fase de teste.</li>
  <li>Dev: corresponde à versão em desenvolvimento do software.</li>
</ul>

O ramo master é reservado para versões prontas para produção, enquanto o ramo dev contém versões em desenvolvimento que ainda estão sujeitas a testes. O ramo homologação é usado para realizar testes nos códigos antes da produção. Se problemas forem detectados, as correções são aplicadas isoladamente no ramo instável para estabilizar a versão antes de entrar em produção. 

Em relação à gestão de problemas, o projeto utiliza as seguintes etiquetas: 

<ul>
  <li>Documentação: para melhorias ou adições à documentação.</li>
  <li>Bug: quando uma funcionalidade apresenta problemas.</li> 
  <li>Aprimoramento: para aprimoramentos em funcionalidades existentes.</li>
  <li>Recurso: para introduzir uma nova funcionalidade.</li>
</ul>

### Divisão de Papéis

Como mencionado anteriormente, a equipe empregará a metodologia Scrum, caracterizada por esforços concentrados e incrementais distribuídos em sprints, os quais, normalmente, terão a duração de duas semanas.

A equipe utiliza o Scrum como base para definição do processo de desenvolvimento.
[Adicione informações abaixo sobre a divisão de papéis entre os membros da equipe.]
* _Scrum Master_: Kevin Lucas Andrade dos Santos
* _Product Owner_: Marcelly Thais Freitas Neves
* _Equipe de Desenvolvimento_: 
  * Brena Aparecida Ferreira
  * Caio de Souza Araújo
  * Fernando Vinícius Sousa Moura
  * Kevin Lucas Andrade dos Santos
  * Marcelly Thais Freitas Neves
* _Equipe de Design_: Fernando Vinícius Sousa Moura

### Processo

A metodologia Scrum foi integrada com o método Kanban para visualizar a distribuição de tarefas, sendo realizada por meio da ferramenta Projects do GitHub. As lanes (faixas) existentes são: 

Backlog: inclui as tarefas identificadas e necessárias para a criação do produto; 

To do: engloba as tarefas a serem incorporadas na sprint; 

In progress: abrange as tarefas que foram iniciadas e estão em processo de desenvolvimento; 

Test: engloba as tarefas concluídas e submetidas a testes para garantir a qualidade do desenvolvimento; 
Locked: nesta etapa, são listadas as tarefas que foram interrompidas devido a algum impedimento que necessita de resolução; 

Done: abriga as tarefas finalizadas e testadas.

### Etiquetas
<p>As tarefas são, ainda, etiquetadas em função da natureza da atividade e seguem o seguinte esquema de cores/categorias:</p>

<ul>
  <li>Bug (Erro no código)</li>
  <li>Desenvolvimento (Development)</li>
  <li>Documentação (Documentation)</li>
  <li>Gerência de Projetos (Project Management)</li>
  <li>Infraestrutura (Infrastructure)</li>
  <li>Testes (Tests)</li>
</ul>

<figure> 
  <img src="https://user-images.githubusercontent.com/100447878/164068979-9eed46e1-9b44-461e-ab88-c2388e6767a1.png">
</figure> 
  
### Ferramentas

<p>Segue abaixo a lista das ferramentas utilizadas no projeto:</p>

**Editores de Código:**

<table width="100%">
  <tr>
    <th>Ferramenta</th>
    <th>Descrição da Utilização</th>
  </tr>
  <tr>
    <td>GitHub</td>
    <td>Utilizado tanto como editor de código quanto como ferramenta de organização, servindo como local síncrono de armazenamento e edição do repositório do projeto.</td>
  </tr>
  <tr>
    <td>Visual Studio Code</td>
    <td>Empregado em conjunto com o GitHub para a elaboração de códigos mais complexos.</td>
  </tr>
</table>

<p>

<h4><b>Ferramentas de Comunicação e Organização:</h4></b>

<table width="100%">
  <tr>
    <th>Ferramenta</th>
    <th>Descrição da Utilização</th>
  </tr>
  <tr>
    <td>Microsoft Teams</td>
    <td>Utilizado para realizar as reuniões de equipe, bem como as reuniões semanais em conjunto com a coordenadora do projeto.</td>
  </tr>
  <tr>
    <td>Microsoft Office</td>
    <td>Utilizado em suas diversas funcionalidades. O Microsoft Word foi empregado para elaborar a documentação do projeto, enquanto o Power Point foi escolhido para a apresentação da proposta de projeto. O sistema Office em si foi utilizado como local de compartilhamento de documentos.</td>
  </tr>
    <tr>
    <td>Trello</td>
    <td>Utilizado para a organização e segmentação de tarefas no projeto.</td>
  </tr>
</table>
<p>
<h4><b>Ferramentas de Desenho de Tela (wireframing):</h4></b>

<table width="100%">
  <tr>
    <th>Ferramenta</th>
    <th>Descrição da Utilização</th>
  </tr>
  <tr>
    <td>Figma</td>
    <td>Utilizado na versão final do projeto de interface.</td>
  </tr>
</table>

### Estratégia de Organização de Codificação 

Todos os artefatos relacionados a implementação e visualização dos conteúdos do projeto do site deverão ser inseridos na pasta [codigo-fonte](http://https://github.com/ICEI-PUC-Minas-PMV-ADS/WebApplicationProject-Template-v2/tree/main/codigo-fonte). Consulte também a nossa sugestão referente a estratégia de organização de codificação a ser adotada pela equipe de desenvolvimento do projeto.
