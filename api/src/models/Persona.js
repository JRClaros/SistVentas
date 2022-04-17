const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Persona',{
        idpersonal:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tipo_persona:{
            type: DataTypes.STRING,
            allowNull: false
        },
        nombre:{
            type: DataTypes.STRING,
            allowNull: false
        },
        tipo_documento:{
            type: DataTypes.STRING,
            allowNull: false
        },
        num_documento:{
            type: DataTypes.STRING,
            allowNull: false
        },
        direccion_departamento:{
            type: DataTypes.STRING,
            allowNull: true
        },
        direccion_provincia:{
            type: DataTypes.STRING,
            allowNull: true
        },
        direccion_distrito:{
            type: DataTypes.STRING,
            allowNull: true
        },
        direccion_calle:{
            type: DataTypes.STRING,
            allowNull: false
        },
        telefono:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false
        },
        numero_cuenta:{
            type: DataTypes.STRING,
            allowNull: true
        },
        estado:{
            type: DataTypes.CHAR(1),
            allowNull: false
        }
    })
}