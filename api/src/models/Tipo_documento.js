const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Tipo_documento',{
        idtipo_documento:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre:{
            type: DataTypes.STRING,
            allowNull: false
        },
        operacion:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}