CREATE TABLE Empresa (
    idEmpresa int NOT NULL IDENTITY,
    razaoSocial varchar(255),
    nomeFantasia varchar(255),
    telefone varchar(255),
    email varchar(255),
    cnpj varchar(16) NOT NULL PRIMARY KEY,
    site varchar(255),
    dataCriacao date,
    dataAtualizacao date
);

CREATE TABLE Endereco (
    idEndereco int NOT NULL PRIMARY KEY IDENTITY,
    endereco varchar(255),
    cep varchar(8),
    numero int,
    bairro varchar(255),
    cidade varchar(255),
    estado varchar(255),
    dataCriacao date,
    dataAtualizacao date
);

CREATE TABLE grupoGeradores (
    idGrupoGerador int NOT NULL PRIMARY KEY IDENTITY,
    empresa varchar(255),
    fabricante varchar(255),
    gPotencia float,
    nSerie varchar(255),
    modelo varchar(255),
    filtro varchar(255),
    fCompativeis int,
    mangueira varchar(255),
    mCompativeis int,
    tipoOper int,
    fabMotor varchar(255),
    serie varchar(255),
    mmodelo varchar(255),
    mPotencia varchar(255),
    dataCriacao date,
    dataAtualizacao date
);

CREATE TABLE produtos (
    idProduto int NOT NULL IDENTITY,
    nomeProduto varchar(255),
    codInterno varchar(255),
    codigo varchar(255),
    quantidade int,
    valor float,
    observacoes varchar(255),
    dataCriacao date,
    dataAtualizacao date
);

--insert into Empresa (razaoSocial, nomeFantasia, telefone, email, cnpj, site) values ('Teste','Teste','Teste','Teste','1','Teste')