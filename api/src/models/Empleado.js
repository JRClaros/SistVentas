const { DataTypes } = require ('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Empleado',{
        idempleado:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombres:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        apellidos:{
            type: DataTypes.STRING,
            allowNull: false
        },
        tipo_documento:{
            type: DataTypes.STRING,
            allowNull: false
        },
        numero_documento:{
            type: DataTypes.STRING,
            allowNull: false
        },
        direccion:{
            type: DataTypes.STRING,
            allowNull: true
        },
        telefono:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: true
        },
        fecha_nacimiento:{
            type: DataTypes.DATE,
            allowNull: true
        },
        foto:{
            type: DataTypes.STRING,
            allowNull: true
        },
        login:{
            type: DataTypes.STRING,
            allowNull: false
        },
        clave:{
            type: DataTypes.STRING,
            allowNull: false
        },
        estado:{
            type: DataTypes.CHAR(1),
            allowNull:false
        }
    })
}