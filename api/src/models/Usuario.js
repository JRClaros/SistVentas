const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('Usuario',{
        idusuario:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idsucursal:{
            type: DataTypes.INTEGER, //Llave foranea
            allowNull:false
        },
        idempleado:{
            type: DataTypes.INTEGER, //Llave foranea
            allowNull: false
        },
        tipo_usuario:{
            type: DataTypes.STRING,
            allowNull: false
        },
        fecha_registro:{
            type: DataTypes.DATE,
            allowNull: false
        },
        mnu_almacen:{
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        mnu_compras:{
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        mnu_ventas:{
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        mnu_mantenimiento:{
            type: DataTypes.BOOLEAN,
            allowNull:false
        },
        mnu_seguridad:{
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        mnu_consulta_compras:{
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        mnu_consulta_ventas:{
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        mnu_admin:{
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        estado:{
            type: DataTypes.CHAR(1),
            allowNull: false
        }
    })
}