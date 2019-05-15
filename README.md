# trendstorm

**A trendstorm é um projeto orgulhosamente realizado por alunos da Ironhack SP. O trendstorm é uma plataforma de analise de tendências para você conceber seu futuro negocio. Procure produtos por categoria e palavras-chaves e obtenha insights do mercado sobre sua ideia. Salve e compare paineis de analise para encontrar seu proximo grande empreendimento! Para descobrir a plataforma siga este link : xxxxxxxxxxxxxxxxxxxxxxxxx**


## Pré-requisitos
- Faça fork neste repositorio
- Clone o repositorio


## Setup
trendstorm foi construido com Node.JS e MongoDB.
O site foi publicado via Heroku.

As dependências seguintes devem ser instaladas :
- express (4.16.4),
- body-parser (1.19.0),
- cookie-session (1.3.3),
- dotenv (8.0.0),
- google-trends-api (4.9.0),
- hbs (4.0.4),
- mongoose (5.5.7),
- passport (0.4.0),
- passport-google-oauth20 (2.0.0).


## Arvore de Rotas
"/"  <br>
 ↳ 'Sobre a Ferramenta' => "/"    <br>
 ↳ 'Cadastrar' => "/auth/local"   <br>
 ↳ 'Cadastrar' => "/login"   <br>
 ↳ 'Entrar' => "/login"  <br>
-----------------------↳ 'Entrar' => "/dashboard" <br>
                                  ↳ 'Sobre a Ferramenta' => "/"  <br>
                                  ↳ 'Logout' => "/logout" <br>
                                  ↳ (click em painel existente) => "/panel=......" <br>
                                                                       ↳ 'Edit' => "/panel=......"   (abertura de janela pop-up) <br>
                                                                       ↳ 'Delete' => "/dashboard" <br>
                                  ↳ 'Adicionar painel' => "/dashboard"  (abertura de janela pop-up)  <br>
                                                                               ↳ 'Criar' => "/new-panel"  <br>
                                                                                                ↳ 'Edit' => "/new-panel"  (abertura de janela pop-up)   <br>
                                                                                                ↳ 'Save' => "/dashboard"   <br>
                                  ↳ 'Panel Battle' => "/dashboard"  <br>


## Wireframes & User Stories

Acesse os wireframes aqui. <br>
Acesse os user stories aqui.


## Contribuir
A trendstorm é fruto de um projeto feito por aprendizes-programadores, todo pull request feito para contribuir a melhorar a plataforma, sera bem-vindo.

Ao terminar, é so rodar os comandos seguintes no seu terminal:
- git add .
- git commit -m "[ comente seu codigo ]"
- git push origin master

E criar um Pull Request para que avaliemos suas sugestoes de otimizaçao.
Obrigado!


## Autores
Sany Chernizon - @ <br>
Paul Divet - @pdiv55 <br>
José Luiz Coe - @   <br>
Gabriel Sicuto - @