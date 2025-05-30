const { DataTypes } = require('sequelize');
const sequelize = require('../conexion')

const usuarios = sequelize.define('usuarios', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nombre: { type: DataTypes.STRING },
    correo: { type: DataTypes.STRING },
    telefono: { type: DataTypes.INTEGER },
    direccion: {type: DataTypes.STRING}
}, {
    timestamps: false
})

module.exports = usuarios;