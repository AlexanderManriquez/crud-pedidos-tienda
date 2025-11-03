const usuariosService = require('../services/usuariosService');

class UsuariosController {
  async crearUsuario(req, res) {
    try {
      const nuevoUsuario = await usuariosService.crearUsuario(req.body);
      res.status(201).json(nuevoUsuario);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async obtenerUsuarios(req, res) {
    try {
      const usuarios = await usuariosService.obtenerUsuarios();
      res.status(200).json(usuarios);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async actualizarUsuario(req, res) {
    try {
      const { id } = req.params;
      const usuarioActualizado = await usuariosService.actualizarUsuario(id, req.body);
      res.status(200).json(usuarioActualizado);
    } catch (error) {
      if (error.message.includes('no encontrado')) {
        res.status(404).json({ error: error.message });
      } else {
        res.status(400).json({ error: error.message });
      }
    }
  }

  async eliminarUsuario(req, res) {
    try {
      const { id } = req.params;
      const resultado = await usuariosService.eliminarUsuario(id);
      res.status(200).json(resultado);
    } catch (error) {
      if (error.message.includes('no encontrado')) {
        res.status(404).json({ error: error.message });
      } else {
        res.status(400).json({ error: error.message });
      }        
    }
  }
}

module.exports = new UsuariosController();