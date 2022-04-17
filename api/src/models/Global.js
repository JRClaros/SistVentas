const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Global',{
        idglobal:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        empresa:{
            type: DataTypes.STRING,
            allowNull: false
        },
        nombre_impuesto:{
            type: DataTypes.STRING,
            allowNull: false
        },
        porcentaje_impuesto:{
            type: DataTypes.DECIMAL(5,2),
            allowNull: false
        },
        simbolo_moneda:{
            type: DataTypes.STRING,
            allowNull: false
        },
        logo:{
            type: DataTypes.STRING,
            allowNull: true
        }
    })
}