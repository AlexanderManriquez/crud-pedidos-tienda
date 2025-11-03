const express = require('express');
const { testConnection, sequelize } = require('./db');
const usuariosRoutes = require('./routes/usuariosRoutes');
const pedidosRoutes = require('./routes/pedidosRoutes');

const app = express();
app.use(express.json());

(async () => {
  try {
    await sequelize.sync({ alter: true }); 
    console.log('✅ Tablas sincronizadas correctamente');
  } catch (error) {
    console.error('❌ Error al sincronizar tablas:', error);
  }
})();

const PORT = process.env.PORT || 3000;

app.use(usuariosRoutes);
app.use(pedidosRoutes);


app.listen(PORT, async () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
  await testConnection();
});