E-commerce Little Store:

Tecnologias:

1. Construção back-end :  dotnet
2. Costrução front-end: React
3. Gerenciamento de estado do lado do cliente: Redux
4. Framework do estilo para React:  Material UI
5. Linguagem TypeScript
6. Linguagem C#
7. Entity Framework
8. ASPNETCore Identity para autenticação

Dependecias que precisam ser instalados no ambiente local:

Back-end:
1. DotNet version  NET SDK versão 6.0.4:  https://dotnet.microsoft.com/en-us/download. Validar dotnet --info
2. DotNet IDE JetBrains Rider C#: https://www.jetbrains.com/rider/ (Opcional)
3. Node (pode ser quaquer versao a cima de 10)  mas de preferencia versão 16.17.0  / versão npm 8.15.0 Validar node --version/ npm --version. 
4. Instalação Git para versionar código:  https://git-scm.com/

Front-end:
1. React App: npx create-react-app client --template typescript --use-npm
2. MUI: npm install @mui/material @emotion/react @emotion/styled


Rodar Back no nivel API > dotnet watch run <br>
Rodar Front no nivel client > npm start

Gitflow:

Criar brach a partir develop > git commit > git push > abrir PR para develop > aprovado > mergiar com branch develop > abrir PR para main > aprovado > mergiar na main > validar se está tudo certo > remover branch trabalhado.
