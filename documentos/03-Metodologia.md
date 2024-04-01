
# Metodologia

Esta seção descreve a organização da equipe para a execução das tarefas do projeto e as ferramentas utilizadas para a manutenção dos códigos e demais artefatos.


# Controle de Versão 

No projeto, foi escolhido o Git como a ferramenta de controle de versão, enquanto o Github foi utilizado para hospedar o repositório. 

Para nomear os ramos do projeto, adotamos a seguinte convenção: 

<ul>
  <li>master: refere-se à versão do software que já foi testada e é considerada estável.</li>
  <li>instável: representa uma versão que passou por testes, mas ainda não é estável devido a problemas identificados.</li>
  <li>homologação: indica a versão atualmente em fase de teste.</li>
  <li>dev: corresponde à versão em desenvolvimento do software.</li>
</ul>

O ramo master é reservado para versões prontas para produção, enquanto o ramo dev contém versões em desenvolvimento que ainda estão sujeitas a testes. O ramo homologação é usado para realizar testes nos códigos antes da produção. Se problemas forem detectados, as correções são aplicadas isoladamente no ramo instável para estabilizar a versão antes de entrar em produção. 

Em relação à gestão de problemas, o projeto utiliza as seguintes etiquetas: 

<ul>
  <li>documentação: para melhorias ou adições à documentação.</li>
  <li>bug: quando uma funcionalidade apresenta problemas.</li> 
  <li>aprimoramento: para aprimoramentos em funcionalidades existentes.</li>
  <li>recurso: para introduzir uma nova funcionalidade.</li>
</ul>

## Gerenciamento de Projeto

O desenvolvimento da aplicação seguirá o protocolo HTTP como base, empregando a linguagem de marcação HTML5 para estruturação, juntamente com CSS para estilização. A codificação da aplicação será conduzida em JavaScript, fazendo uso da plataforma Visual Studio Code. O controle de versão do projeto será realizado através do Git, hospedado no repositório GitHub. Quanto à abordagem de gestão, optou-se pela metodologia ágil SCRUM.

### Divisão de Papéis

Como mencionado anteriormente, a equipe empregará a metodologia Scrum, caracterizada por esforços concentrados e incrementais distribuídos em sprints, os quais, normalmente, terão a duração de duas semanas.

A equipe utiliza o Scrum como base para definição do processo de desenvolvimento.
[Adicione informações abaixo sobre a divisão de papéis entre os membros da equipe.]
- Scrum Master: 
   Kevin Lucas Andrade dos Santos
- Product Owner: 
    Marcelly Thais Freitas Neves
- Equipe de Desenvolvimento: 
    Brena Aparecida Ferreira
    Caio de Souza Araújo
- Equipe de Design: 
    Fernando Vinícius Sousa Moura

> **Links Úteis**:
> - [11 Passos Essenciais para Implantar Scrum no seu 
> Projeto](https://mindmaster.com.br/scrum-11-passos/)
> - [Scrum em 9 minutos](https://www.youtube.com/watch?v=XfvQWnRgxG0)

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
  <img src="https://user-images.githubusercontent.com/100447878/164068979-9eed46e1-9b44-461e-ab88-c2388e6767a1.png"
    <figcaption>Figura 3 - Tela do esquema de cores e categorias</figcaption>
</figure> 
  
### Ferramentas

[Descreva aqui as ferramentas empregadas no projeto e os ambiente de trabalho utilizados pela  equipe para desenvolvê-lo. Abrange a relação de ambientes utilizados, a estrutura para gestão do código fonte, além da definição do processo e ferramenta através dos quais a equipe se organiza (Gestão de Times).]

Os artefatos do projeto são desenvolvidos a partir de diversas plataformas e a relação dos ambientes com seu respectivo propósito é apresentada na tabela que se segue.

| AMBIENTE                            | PLATAFORMA                         | LINK DE ACESSO                         |
|-------------------------------------|------------------------------------|----------------------------------------|
| Repositório de código fonte         | GitHub                             | http://....                            |
| Documentos do projeto               | GitHub                             | http://....                            |
| Projeto de Interface                | Figma                              | http://....                            |
| Gerenciamento do Projeto            | GitHub Projects                    | http://....                            |
| Hospedagem                          | GitHub Pages                       | http://....                            |


### Estratégia de Organização de Codificação 

Todos os artefatos relacionados a implementação e visualização dos conteúdos do projeto do site deverão ser inseridos na pasta [codigo-fonte](http://https://github.com/ICEI-PUC-Minas-PMV-ADS/WebApplicationProject-Template-v2/tree/main/codigo-fonte). Consulte também a nossa sugestão referente a estratégia de organização de codificação a ser adotada pela equipe de desenvolvimento do projeto.
