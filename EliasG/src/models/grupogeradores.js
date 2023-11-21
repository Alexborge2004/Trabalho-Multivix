const sequelize = require('sequelize');
const database = require('../db');
const schema ="";

class GrupoGeradores extends sequelize.Model{}

GrupoGeradores.init(
    {
        idGrupoGerador :
        {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        empresa:
        {
            type: sequelize.STRING,
            allowNull: false,
        },
        fabricante:
        {
            type: sequelize.STRING,
            allowNull: false,
        },
        gPotencia:
        {
            type: sequelize.FLOAT,
            allowNull: false,
        },
        nSerie:
        {
            type: sequelize.STRING,
            allowNull: false,
        },
        modelo:
        {
            type: sequelize.STRING,
            allowNull: false,
        },
        filtro:
        {
            type: sequelize.STRING,
            allowNull: false,
        },
        fCompativeis:
        {
            type: sequelize.INTEGER,
            allowNull: false,
        },
        mangueira:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        mCompativeis:
        {
            type: sequelize.INTEGER,
            allowNull: true,
        },
        tipoOper:
        {
            type: sequelize.INTEGER,
            allowNull: true,
        },
        fabMotor:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        serie:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        mmodelo:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        mPotencia:
        {
            type: sequelize.STRING,
            allowNull: true,
        },
        dataCriacao:
        {
            type: sequelize.DATE,
            allowNull: true,
        },
        dataAtualizacao:
        {
            type: sequelize.DATE,
            allowNull: true,
        }
    },
    {
        sequelize : database, modelName:'grupogeradores',schema
    }
)

module.exports = GrupoGeradores;