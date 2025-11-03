const express = require('express');
const { testConnection, sequelize } = require('./db');
const usuariosRoutes = require('./routes/usuariosRoutes');
const pedidosRoutes = require('./routes/pedidosRoutes');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use(usuariosRoutes);
app.use(pedidosRoutes);


app.listen(PORT, async () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
  await testConnection();
});