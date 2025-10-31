// id, nombre, email. contraseña
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Usuarios = sequelize.define('Usuarios', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      validate: { isEmail: true },
    },
    contrasena: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [8, 100],
            msg: 'La contraseña debe tener al menos 8 caracteres',
          }
        }
    }
  }, {
    tableName: 'usuarios',
    timestamps: false,
  });

  return Usuarios;
};