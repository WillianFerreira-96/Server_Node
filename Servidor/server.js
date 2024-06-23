//1° Inicializar o Node "npm init -y" 
//2º Instalar o framework Express "npm install express"

//3º Importar o framework Express para o server.js
const express = require('express');
//4º Criar uma instância do express
const app = express();

//5º Declarar o nome da pasta que aloca o "index.html"
    /*  A pasta do projeto em questão precisa esta dentro
    da mesma pasta do arquivo "server.js" com um arquivo "index.html" */
app.use(express.static('Projeto Web'));

//6º Definir a porta do localhost
const port = 3000;
app.listen(port, ()=> {
    console.log(`Servidor está rodando em http://localhost:${port}`)
  });
    /*  app.listen(port) é a parte do código funcional!
    , ()=> {console.log(`Servidor está rodando em http://localhost:${port}`)} dentro dele é apenas uma "Perfumaria"...
    ...para mostrar no console, que o código funcionou. */

//7º Rodar o Servidor no terminal "node server.js"