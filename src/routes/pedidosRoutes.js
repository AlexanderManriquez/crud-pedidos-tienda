const express = require('express');
const router = express.Router();
const pedidosController = require('../controllers/pedidosController');

router.post('/pedidos', pedidosController.crearPedido);
router.get('/usuarios/:id/pedidos', pedidosController.obtenerPedidosPorUsuario);

module.exports = router;