const { Pedidos, Usuarios, sequelize } = require('../models');

class PedidosService {
  async crearPedido(data) {
    const transaction = await sequelize.transaction();
    try {
      const { usuario_id } = data;
      
      const usuario = await Usuarios.findByPk(usuario_id);
      if (!usuario) {
        throw new Error('Usuario no encontrado');
      }

      const nuevoPedido = await Pedidos.create(data, { transaction });
      await transaction.commit();
      return nuevoPedido;
    } catch (error) {
      await transaction.rollback();
      throw new Error(`Error al crear el pedido: ${error.message}`);
    }
  }

  async obtenerPedidosPorUsuario(usuarioId) {
    try {
      const usuario = await Usuarios.findByPk(usuarioId);
      if (!usuario) {
        throw new Error('Usuario no encontrado');
      }

      const pedidos = await Pedidos.findAll({
        where: { usuario_id: usuarioId },
        order: [['fecha_pedido', 'DESC']]
      });

      return pedidos;
    } catch (error) {
      throw new Error(`Error al obtener los pedidos: ${error.message}`);
    }
  }
}

module.exports = new PedidosService();