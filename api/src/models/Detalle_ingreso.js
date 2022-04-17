const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Detalle_ingreso',{
        iddetalle_ingreso:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idingreso:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idarticulo:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        codigo:{
            type: DataTypes.STRING,
            allowNull: false
        },
        serie:{
            type: DataTypes.STRING,
            allowNull: true
        },
        descripcion:{
            type: DataTypes.STRING,
            allowNull: true
        },
        stock_ingreso:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        stock_actual:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        precio_compra:{
            type: DataTypes.DECIMAL(8,2),
            allowNull: false
        },
        precio_ventadistribuidor:{
            type: DataTypes.DECIMAL(8,2),
            allowNull: false
        },
        precio_ventapublico:{
            type: DataTypes.DECIMAL(8,2),
            allowNull: false
        }
    })
}