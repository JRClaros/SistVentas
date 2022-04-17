const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Sucursal', {
    idsucursal:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    razon_social: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipo_documento:{
      type: DataTypes.STRING,
      allowNull: false
    },
    num_documento:{
      type: DataTypes.STRING,
      allowNull: false
    },
    direccion:{
      type: DataTypes.STRING,
      allowNull: false
    },
    telefono:{
      type: DataTypes.STRING,
      allowNull: false
    },
    email:{
      type : DataTypes.STRING,
      allowNull: true
    },
    representante:{
      type: DataTypes.STRING,
      allowNull: true
    },
    logo:{
      type: DataTypes.STRING,
      allowNull: true
    },
    estado:{
      type: DataTypes.CHAR(1),
      allowNull: false
    }
  });
};
