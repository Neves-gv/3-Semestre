create table usuarios (
  id_usuario SERIAL primary key,
  nome VARCHAR(100) not null,
  email VARCHAR(150) not null,
  senha VARCHAR(255) not null
);

create table DEPARTAMENTOS (
  id_departamento SERIAL primary key,
  nome VARCHAR(100) not null,
  descricao VARCHAR(255)
);

create table ordem_servicos (
  id_ordem SERIAL primary key,
  numero_ordem INT unique,
  titulo VARCHAR(100) not null,
  descricao VARCHAR(255) not null,
  prioridade VARCHAR(100) not null,
  status VARCHAR(100) not null,
  data DATE not null,
  id_usuario INT not null references usuarios (id_usuario),
  id_departamento INT not null references departamentos (id_departamento)
);

INSERT INTO usuarios(nome, email, senha) VALUES('Ana Silva', 'ana.silva@gmail.com', 'senha123'),
 ('Vitor Neves', 'vitor.neves@gmail.com', '1234');
INSERT INTO DEPARTAMENTOS(nome, descricao,) VALUES('TI', 'Tecnologia da inovação'),
('Manutenção', 'Setor de manutenção geral');

insert into ordem_servicos(numero_ordem, titulo, descricao, prioridade, status, data, id_usuario, id_departamento) values
(1001, 'Trocar cabo de rede', 'Ponte de rede da sala 203 está sem contexto', 'media', 'abreta', '2026-02-26', 1, 1), 
(1002, 'Consetar ar-condicionado', 'Unidade do laboratório parou de gelar', 'alta', 'em_andamento', '2026-02-26', 2, 2)
