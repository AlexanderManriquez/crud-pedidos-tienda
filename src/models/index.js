const { Sequelize } = require('sequelize');
const sequelize = require('../db');
const UsuariosModel = require('./Usuarios');
const PedidosModel = require('./Pedidos');

const Usuarios = UsuariosModel(sequelize);
const Pedidos = PedidosModel(sequelize);

Usuarios.hasMany(Pedidos, {
  foreignKey: 'usuario_id',
  sourceKey: 'id',
  as: 'pedidos'
});

Pedidos.belongsTo(Usuarios, {
  foreignKey: 'usuario_id',
  targetKey: 'id',
  as: 'usuario'
});

module.exports = { sequelize, Usuarios, Pedidos };