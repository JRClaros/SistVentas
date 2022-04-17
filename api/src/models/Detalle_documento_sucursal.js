const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Detalle_documento_sucursal',{
        iddetalle_documento_sucursal:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idsucursal:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idtipo_documento:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ultima_serie:{
            type: DataTypes.STRING,
            allowNull: false
        },
        ultimo_numero:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}