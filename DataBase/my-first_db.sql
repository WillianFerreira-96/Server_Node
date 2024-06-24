create database my_first_db;
use my_first_db;
create table usuario(
	id int  auto_increment primary key,
    nome varchar(50),
    senha varchar(50)
);