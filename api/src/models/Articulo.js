const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('Articulo',{
        idarticulo:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idcategoria:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idunidad_medida:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        nombre:{
            type: DataTypes.STRING,
            allowNull: false
        },
        descripcion:{
            type: DataTypes.TEXT,
            allowNull: true
        },
        imagen:{
            type: DataTypes.STRING,
            allowNull: true
        },
        estado:{
            type: DataTypes.CHAR(1),
            allowNull: false
        }
    })
}