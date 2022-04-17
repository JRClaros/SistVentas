const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Detalle_pedido',{
        iddetalle_pedido:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idpedido:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        iddetalle_ingreso:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cantidad:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        precio_venta:{
            type: DataTypes.DECIMAL(8,2),
            allowNull: false
        },
        descuento:{
            type: DataTypes.DECIMAL(8,2),
            allowNull: true
        }
    })
}