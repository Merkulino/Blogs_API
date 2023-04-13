# :construction: README em construção ! :construction:
# Blogs API

Projeto Trybe - API Rest simples de um sistema de blogs

Esse foi mais um projeto de Back End desenvolvido durante o curso de Desenvolvimento Fullstack na Trybe. O Blogs API, é uma API Rest de um sistema de blog ou rede social, sendo possivel, fazer requisições no modelo CRUD e modificar diretamente um banco de dados relacionais.

Utilizando Node.js, express e JavaScript, criei essa API simples dentro do modelo MSC. Dentre as funcionalidades dessa API esta:

 - Criar Usuarios
 - Login de usuario
 
Com a validação do Token de usuario, é possivel:

 - Recuperar usuarios
 - Recuperar usuario expecífico
 - Buscar postagens
 - Buscar postagem expecífica
 - Criar uma nova publicação
 - Atualizar uma publicação (Validando usuario da publicação)
 - Apagar uma publicação (Validando usuario da publicação)
 - Apagar um usuario (Validando usuario)

Para criação, normalização e conexão com banco de dados MySQL, foi utilizado o ORM Sequelize, para auxiliar nessa conexão segura com o banco. Também utilzei o JWT para criação e validações de tokens de usuario. 

## Tecnologias e habilidades usadas

 - JavaScript
 - Node.js
 - Express
 - MySQL
 - API Rest
 - ORM: Sequelize
 - JWT (Json Web Token)
 - MSC (Model, Service, Controller)
 - CRUD 

Todos os arquivos desenvolvidos por mim estão dentro da pasta `src`, os restantes, são arquivos de configuração ou arquivos desenvolvidos pela Trybe

## Como rodar 🚀

Caso queira executar esse projeto em sua máquina utilizando o docker, você pode:
 * Fazer o clone desse repositório 
 * Instalar as dependências utilizando rodando em seu terminal `npm install`
 * Com o docker instalado e inicializado, rode em seu terminal `docker-compose up -d`
 * Execute os containers criados `docker exec -it <container-name> bash` e `docker exec -it <container-name-db> bash`
 * No container de back-end, rode `npm run dev`
 * No container do banco de dados, rode `mysql -u root -p` utilizando a senha configurada nas variaveis de ambiente do docker-compose.yml, `password`
 * Pronto! Agora só executar endpoints com as requisições configuradas no arquivo `src/app.js`

## Autor

**Melqui Brito de Jesus**

Linkedin: https://www.linkedin.com/in/melqui-brito-871676188/

Telegram: https://t.me/Merkulino

Email: Merkulino11@gmail.com
