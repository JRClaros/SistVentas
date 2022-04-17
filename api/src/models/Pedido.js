const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Pedido',{
        idpedido:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idcliente:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idusuario:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idsucursal:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        tipo_pedido:{
            type: DataTypes.STRING,
            allowNull: false
        },
        fecha:{
            type: DataTypes.DATE,
            allowNull: false
        },
        estado:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}