const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './ProyectoFinal.sqlite'
});

module.exports = sequelize;
