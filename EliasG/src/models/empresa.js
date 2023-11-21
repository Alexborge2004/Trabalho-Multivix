const sequelize = require('sequelize');
const database = require('../db');
const schema ="";

class Empresa extends sequelize.Model{}

Empresa.init(
    {
        idEmpresa :
        {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        razaoSocial:
        {
            type: sequelize.STRING,
            allowNull: false,
        },
        nomeFantasia:
        {
            type: sequelize.STRING,
            allowNull: false,
        },
        telefone:
        {
            type: sequelize.STRING,
            allowNull: false,
        },
        email:
        {
            type: sequelize.STRING,
            allowNull: false,
        },
        cnpj:
        {
            type: sequelize.STRING,
            allowNull: false,
        },
        site:
        {
            type: sequelize.STRING,
            allowNull: true,
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
        sequelize : database, modelName:'empresa',schema
    }
)

module.exports = Empresa;