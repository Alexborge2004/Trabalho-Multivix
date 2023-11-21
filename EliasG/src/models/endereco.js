const sequelize = require('sequelize');
const database = require('../db');
const schema ="";

class Endereco extends sequelize.Model{}

Endereco.init(
    {
        idEndereco :
        {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        endereco:
        {
            type: sequelize.STRING,
            allowNull: false,
        },
        cep:
        {
            type: sequelize.STRING,
            allowNull: false,
        },
        numero:
        {
            type: sequelize.INTEGER,
            allowNull: false,
        },
        bairro:
        {
            type: sequelize.STRING,
            allowNull: false,
        },
        cidade:
        {
            type: sequelize.STRING,
            allowNull: false,
        },
        estado:
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
        sequelize : database, modelName:'endereco',schema
    }
)

module.exports = Endereco;