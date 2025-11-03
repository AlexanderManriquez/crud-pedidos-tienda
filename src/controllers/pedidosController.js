const pedidosService = require('../services/pedidosService');

class PedidosController {
  async crearPedido(req, res) {
    try {
      const nuevoPedido = await pedidosService.crearPedido(req.body);
      res.status(201).json(nuevoPedido);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async obtenerPedidosPorUsuario(req, res) {
    try {
      const { usuarioId } = req.params;
      const pedidos = await pedidosService.obtenerPedidosPorUsuario(usuarioId);
      res.status(200).json(pedidos);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}

module.exports = new PedidosController();