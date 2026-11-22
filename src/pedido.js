// Calcula el total de un pedido con IVA
function calcularTotal(items, iva = 0.19) {
  if (!Array.isArray(items)) throw new Error('items debe ser un array');
  const subtotal = items.reduce((acc, item) => {
    if (item.precio < 0 || item.cantidad < 0) {
      throw new Error('Precio y cantidad deben ser positivos');
    }
    return acc + item.precio * item.cantidad;
  }, 0);
  return Math.round(subtotal * (1 + iva) * 100) / 100;
}

module.exports = { calcularTotal };