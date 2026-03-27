CREATE TABLE categorias (
    id_categoria SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL, 
    descricao TEXT,
    cor VARCHAR(20),
    icone VARCHAR(50),
    ativo BOOLEAN DEFAULT TRUE
);

CREATE TABLE subcategorias (
    id_subcategoria SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    ativo BOOLEAN DEFAULT TRUE,
    id_categoria INT,
    CONSTRAINT fk_categoria FOREIGN KEY(id_categoria) REFERENCES categorias(id_categoria) ON DELETE CASCADE
);

CREATE TABLE usuarios (
    id_usuario SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    gmail VARCHAR(150) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    tipo_acesso INTEGER
);

CREATE TABLE transacoes (
    id_transacao SERIAL PRIMARY KEY,
    valor NUMERIC(12,2) NOT NULL,
    descricao TEXT,
    data_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_pagamento DATE,
    data_vencimento DATE,
    tipo CHAR(1),
    id_categoria INT,
    id_subcategoria INT,
    CONSTRAINT fk_trans_cat FOREIGN KEY(id_categoria) REFERENCES categorias(id_categoria),
    CONSTRAINT fk_trans_subcat FOREIGN KEY(id_subcategoria) REFERENCES subcategorias(id_subcategoria)
);