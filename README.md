# trendstorm

**A trendstorm é um projeto orgulhosamente realizado por alunos da Ironhack SP. O trendstorm é uma plataforma de analise de tendências para você conceber seu futuro negocio. Procure produtos por categoria e palavras-chaves e obtenha insights do mercado sobre sua ideia. Salve e compare paineis de analise para encontrar seu proximo grande empreendimento! Para descobrir a plataforma siga este link : www.trendstorm.herokuapp.com**


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
- bcryptjs (2.4.3),
- connect-flash (0.1.1),
- passport (0.4.0),
- passport-google-oauth20 (2.0.0),
- passport-local (1.0.0),
- express-session (1.16.1).


## Arvore de Rotas
"/"  (landing page) <br>
 ↳ 'Como funciona ?' => "/"    <br>
 ↳ 'Cadastrar' => "/signin"   <br>
 -------------------↳ 'Cadastrar' => "/auth/local" <br>
 ↳ 'Entrar' => "/login"  <br>
-------------------↳ 'Entrar' => "/dashboard" <br>
-------------------↳ 'Entrar com Google' => "/auth/google" <br>
-----------------------------------------↳ 'Meus Paineis' => "/dashboard"  <br>
-----------------------------------------↳ 'Duvidas' => "/"  <br>
-----------------------------------------↳ 'Sair' => "/logout" <br>
-----------------------------------------↳ 'Ver Painel' => "/read/:panelId" <br>
--------------------------------------------------------------------------------↳ 'Voltar aos Meus Paineis' => "/dashboard"  <br>
--------------------------------------------------------------------------------↳ 'Editar' => "/read/:panelId"     (abertura de pop-up)<br>
-----------------------------------------------------------------------------------------------------↳ 'Editar' => "/update/:panelId"  <br>
--------------------------------------------------------------------------------↳ 'Deletar' => "/delete/:panelId" <br>
-----------------------------------------↳ '+' => "/dashboard"      (abertura de pop-up)<br>
---------------------------------------------------------------------↳ 'Criar' => "/panel"  <br>
--------------------------------------------------------------------------------↳ 'Voltar aos Meus Paineis' => "/dashboard"  <br>
-----------------------------------------↳ 'Comparar paineis' => "/battle"  <br>
--------------------------------------------------------------------------------↳ 'Voltar aos Meus Paineis' => "/dashboard"  <br>


## User Stories

Acesse os user stories aqui. <br>


## Contribuir
A trendstorm é fruto de um projeto feito por aprendizes-programadores, todo pull request feito para contribuir a melhorar a plataforma, sera bem-vindo.

Ao terminar, é so rodar os comandos seguintes no seu terminal:
- git add .
- git commit -m "[ comente seu codigo ]"
- git push origin master

E criar um Pull Request para que avaliemos suas sugestoes de otimizaçao.
Obrigado!


## Autores
Sany Chernizon - @sanychernizon <br>
Paul Divet - @pdiv55 <br>
José Luiz Coe - @joseluizcoe <br>
Gabriel Sicuto - @gsicuto