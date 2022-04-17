require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
// const { FOREIGNKEYS } = require('sequelize/types/query-types');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME
} = process.env;

let sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Articulo, Categoria, Credito, Detalle_documento_sucursal, Detalle_ingreso,
Detalle_pedido, Empleado, Global, Ingreso, Pedido, Persona, Sucursal, Tipo_documento,
Unidad_medida, Usuario, Venta } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

Usuario.belongsTo(Sucursal,{foreignKey: 'idsucursal'});
Sucursal.hasMany(Usuario,{foreignKey: 'idsucursal'});

Usuario.belongsTo(Empleado, {foreignKey:'idempleado'});
Empleado.hasMany(Usuario,{foreignKey:'idempleado'});

Articulo.belongsTo(Categoria,{foreignKey:'idcategoria'});
Categoria.hasMany(Articulo,{foreignKey:'idcategoria'});

Articulo.belongsTo(Unidad_medida,{foreignKey:'idunidad_medida'});
Unidad_medida.hasMany(Articulo,{foreignKey:'idunidad_medida'});

Detalle_documento_sucursal.belongsTo(Sucursal,{foreignKey:'idsucursal'});
Sucursal.hasMany(Detalle_documento_sucursal,{foreignKey:'idsucursal'});

Detalle_documento_sucursal.belongsTo(Tipo_documento,{foreignKey:'idtipo_documento'});
Tipo_documento.hasMany(Detalle_documento_sucursal,{foreignKey:'idtipo_documento'});

Ingreso.belongsTo(Usuario,{foreignKey:'idusuario'});
Usuario.hasMany(Ingreso,{foreignKey:'idusuario'});

Ingreso.belongsTo(Sucursal,{foreignKey:'idsucursal'});
Sucursal.hasMany(Ingreso,{foreignKey:'idsucursal'});

Ingreso.belongsTo(Persona,{foreignKey:'idproveedor'});
Persona.hasMany(Ingreso,{foreignKey:'idproveedor'});

Detalle_ingreso.belongsTo(Ingreso,{foreignKey:'idingreso'});
Ingreso.hasMany(Detalle_ingreso,{foreignKey:'idingreso'});

Detalle_ingreso.belongsTo(Articulo,{foreignKey:'idarticulo'});
Articulo.hasMany(Detalle_ingreso,{foreignKey:'idarticulo'});

Detalle_pedido.belongsTo(Detalle_ingreso,{foreignKey:'iddetalle_ingreso'});
Detalle_ingreso.hasMany(Detalle_pedido,{foreignKey:'iddetalle_ingreso'});

Detalle_pedido.belongsTo(Pedido,{foreignKey:'idpedido'});
Pedido.hasMany(Detalle_pedido,{foreignKey:'idpedido'});

Venta.belongsTo(Persona,{foreignKey:'idusuario'});
Persona.hasMany(Venta,{foreignKey:'idusuario'});

Venta.belongsTo(Pedido,{foreignKey:'idpedido'});
Pedido.hasMany(Venta,{foreignKey:'idpedido'});

Credito.belongsTo(Venta,{foreignKey:'idventa'});
Venta.hasMany(Credito,{foreignKey:'idventa'});

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
