const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Credito',{
        idcredito:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idventa:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fecha_pago:{
            type: DataTypes.DATE,
            allowNull: false
        },
        total_pago:{
            type: DataTypes.DECIMAL(8,2),
            allowNull: false
        }
    })
}