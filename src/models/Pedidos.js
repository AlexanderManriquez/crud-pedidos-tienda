//id, usuario_id, producto, cantidad, fecha_pedido
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Pedidos = sequelize.define('Pedidos', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id'},
      onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    producto: {
      type: DataTypes.STRING(100),
      allowNull: false,
    }, 
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1
      }
    },
    fecha_pedido: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  }, {
    tableName: 'pedidos',
    timestamps: true
  });

  return Pedidos;
};