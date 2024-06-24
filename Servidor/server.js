//1° Inicializar o Node: npm init -y
//2º Instalar o framework Express: npm install express
//3º instalar o driver do Mysql: npm install mysql2

//Importar o framework Express no server.js
//Importar o driver Mysql no server.js
const express = require('express');
const mysql = require('mysql2');

//Criar uma instância do express
const app = express();

//Declarar o nome da pasta que aloca o "index.html"
app.use(express.static('Projeto Web'));
    /*  A pasta do projeto em questão precisa esta dentro
    da mesma pasta do arquivo "server.js" com um arquivo "index.html" */

//Configurar conexão com o Banco de dados
const db = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'root',
  database:'my_first_db'
});

//Conectar ao banco de dados
db.connect(err =>{
  if(err){
    console.error('Erro ao conectar ao banco de dados:', err);
  }else{
    console.log('Conectado ao banco de dados MySQL.');
  }
});

//Definir a porta do localhost
const port = 3000; 
app.listen(port, ()=> {
    console.log(`Servidor está rodando em http://localhost:${port}`)
  });
    /*  app.listen(port) é a parte do código funcional!
    , ()=> {console.log(`Servidor está rodando em http://localhost:${port}`)} dentro dele é apenas uma "Perfumaria"...
    ...para mostrar no console, que o código funcionou. */

//Ligar o Servidor no terminal: node server.js
//Desligar o Servidor no terminal: Ctrl + C

app.post('/api/usuario', (req, res) => {
  const { nome, senha } = req.body;
  const sql = 'INSERT INTO usuario (nome, senha) VALUES (?, ?)';
  connection.query(sql, [nome, senha], (err, results) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.status(201).send({ id: results.insertId, nome, senha });
  });
});