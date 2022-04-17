const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Categoria',{
        idcategoria:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{
            type: DataTypes.STRING,
            allowNull: false
        },
        estado:{
            type: DataTypes.CHAR(1),
            allowNull: false
        }
    })
}