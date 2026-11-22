const express = require('express');
const { calcularTotal } = require('./pedido');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ mensaje: 'Bienvenido al sistema de pedidos del restaurante 🍽️' });
});

app.post('/pedido/total', (req, res) => {
  try {
    const total = calcularTotal(req.body.items || []);
    res.json({ total });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Solo arranca si NO estamos en modo test
if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
}

module.exports = app;