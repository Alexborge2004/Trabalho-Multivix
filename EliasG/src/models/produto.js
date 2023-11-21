const sequelize = require('sequelize');
const database = require('../db');
const schema ="";

class Produto extends sequelize.Model{}

Produto.init(
    {
        idProduto :
        {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nomeProduto:
        {
            type: sequelize.STRING,
            allowNull: false,
        },
        codInterno:
        {
            type: sequelize.INTEGER,
            allowNull: false,
        },
        codigo:
        {
            type: sequelize.INTEGER,
            allowNull: false,
        },
        quantidade:
        {
            type: sequelize.INTEGER,
            allowNull: false,
        },
        valor:
        {
            type: sequelize.FLOAT,
            allowNull: false,
        },
        observacoes:
        {
            type: sequelize.STRING,
            allowNull: false,
        },
        dataCriacao:
        {
            type: sequelize.DATE,
            allowNull: false,
        },
        dataAtualizacao:
        {
            type: sequelize.DATE,
            allowNull: true,
        }
    },
    {
        sequelize : database, modelName:'produto',schema
    }
)

module.exports = Produto;