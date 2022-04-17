const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Venta',{
        idventa:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idpedido:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        idusuario:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        tipo_venta:{
            type: DataTypes.STRING,
            allowNull: false
        },
        tipo_comprobante:{
            type: DataTypes.STRING,
            allowNull: false
        },
        serie_comprobante:{
            type: DataTypes.STRING,
            allowNull: false
        },
        num_comprobante:{
            type: DataTypes.STRING,
            allowNull: false
        },
        fecha:{
            type: DataTypes.DATE,
            allowNull: false
        },
        impuesto:{
            type: DataTypes.DECIMAL(8,2),
            allowNull: false
        },
        total:{
            type: DataTypes.DECIMAL(8,2),
            allowNull: false
        },
        estado:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}