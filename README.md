Desafio quadro Kanban

Foi criado uma API REST utilizando Javascript (Node.js), um ORM sequelize e banco de dados SQLite de acordo com os requisitos abaixo.
A arquitetura de projeto utilizado foi MVC.
Requisitos:

O sistema tem um mecanismo de login usando JWT, com um entrypoint que recebe { "login":"letscode", "senha":"lets@123"} e gera um token, esse token é valido por 10 minutos.

O sistema tem um middleware que valida se o token é correto, valido e não está expirado, antes de permitir acesso a qualquer outro entrypoint. Em caso negativo retorna status 401.

O login e senha fornecidos devem estar em variáveis de ambiente vinda de um arquivo .env 

Os cards tem o seguinte formato:
id: int 
titulo : string, 
conteudo: string, 
lista: string
Data de criação: Date
Data de atualização: Date

Os entrypoints da aplicação devem usar a porta 5000 e ser:
//Realizar o login
(POST)      http://0.0.0.0:5000/login/
//Listar todos os cards
(GET)       http://0.0.0.0:5000/cards/
//Cadastrar um novo card
(POST)      http://0.0.0.0:5000/cards/
//Atualizar um card por id
(PUT)       http://0.0.0.0:5000/cards/{id}
//Deletar um card por id
(DELETE)    http://0.0.0.0:5000/cards/{id}






