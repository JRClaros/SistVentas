const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Unidad_medida',{
        idunidad_medida:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{
            type: DataTypes.STRING,
            allowNull: false
        },
        prefijo:{
            type: DataTypes.STRING,
            allowNull: false
        },
        estado:{
            type: DataTypes.CHAR(1),
            allowNull: false
        }
    })
}