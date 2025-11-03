const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

router.post('/usuarios', usuariosController.crearUsuario);
router.get('/usuarios', usuariosController.obtenerUsuarios);
router.put('/usuarios/:id', usuariosController.actualizarUsuario);
router.delete('/usuarios/:id', usuariosController.eliminarUsuario);

module.exports = router;