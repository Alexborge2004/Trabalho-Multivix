const sequelize = require('sequelize');

const database = new sequelize('eliasg','sa','123',
{
    dialect:'mssql',host:'desktop-td5ngij'
});

database.sync();

module.exports = database;