create database walloSQL

use walloSQL

create table usuario(id int not null identity(1,1), nome varchar(100) not null, telefone varchar(50) unique not null, email varchar(50) unique not null, senha varchar(50) not null)

create table aplicacaoResgate(id int not null identity(1,1), idUsuario int not null, idInvestimento int not null, valor decimal(10,2) not null, tipo varchar(50) not null, categoria varchar(50) not null, data datetime not null, descricao varchar(200))

create table investimento(id int not null identity(1,1), idUsuario int not null, nome varchar(100) not null, categoria varchar(50) not null, meta decimal(10,2), valorAtual decimal(10,2) not null, descricao varchar(200))

create table gasto(id int not null identity(1,1), idUsuario int not null, categoria varchar(50) not null, valor decimal(10,2) not null, meta decimal(10,2), data datetime not null, descricao varchar(200))

create table renda(id int not null identity(1,1), idUsuario int not null, categoria varchar(50) not null, valor decimal(10,2) not null, data datetime not null, descricao varchar(200))

select * from usuario

select * from aplicacaoResgate

select * from investimento

select * from gasto

select * from renda

alter table usuario add constraint pk_usuario primary key (id)

alter table aplicacaoResgate add constraint pk_aplicacaoResgate primary key (id)

alter table investimento add constraint pk_investimento primary key (id)

alter table gasto add constraint pk_gasto primary key (id)

alter table renda add constraint pk_renda primary key (id)

alter table aplicacaoResgate add constraint fk_aplicacaoUsuario foreign key (idUsuario) references usuario (id)

alter table aplicacaoResgate add constraint fk_aplicacaoInvestimento foreign key (idInvestimento) references investimento (id)

alter table gasto add constraint fk_gastoUsuario foreign key (idUsuario) references usuario (id)

alter table investimento add constraint fk_investimentoUsuario foreign key (idUsuario) references usuario (id)

alter table renda add constraint fk_rendaUsuario foreign key (idUsuario) references usuario (id)