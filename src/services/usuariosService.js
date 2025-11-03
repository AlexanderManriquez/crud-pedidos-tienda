const { Usuarios, sequelize } = require('../models');

class UsuariosService {
  async crearUsuario(data) {
    const transaction = await sequelize.transaction();
    try {
      const nuevoUsuario = await Usuarios.create(data, { transaction });
      await transaction.commit();
      return nuevoUsuario;
    } catch (error) {
      await transaction.rollback();
      throw new Error(`Error al crear el usuario: ${error.message}`);
    }
  }

  async obtenerUsuarios() {
    return await Usuarios.findAll();
  }

  async actualizarUsuario(id, data) {
    const transaction = await sequelize.transaction();
    try {
      const usuario = await Usuarios.findByPk(id);
      if (!usuario) {
        throw new Error('Usuario no encontrado');
      }

      await usuario.update(data, { transaction });
      await transaction.commit();
      return usuario;
    } catch (error) {
      await transaction.rollback();
      throw new Error(`Error al actualizar el usuario: ${error.message}`);
    }
  }

  async eliminarUsuario(id) {
    const transaction = await sequelize.transaction();
    try {
      const usuario = await Usuarios.findByPk(id);
      if (!usuario) {
        throw new Error('Usuario no encontrado');
      }
      await usuario.destroy({ transaction });
      await transaction.commit();
      return { mensaje: 'Usuario eliminado correctamente' };
    } catch (error) {
      await transaction.rollback();
      throw new Error(`Error al eliminar el usuario: ${error.message}`);
    }
  }
}

module.exports = new UsuariosService();