const { calcularTotal } = require('../src/pedido');

describe('calcularTotal', () => {
  test('calcula total con IVA 19% para un pedido simple', () => {
    const items = [
      { precio: 10000, cantidad: 2 }, // 20000
      { precio: 5000, cantidad: 1 },  // 5000
    ];
    // subtotal = 25000, con IVA = 29750
    expect(calcularTotal(items)).toBe(29750);
  });

  test('devuelve 0 para un pedido vacío', () => {
    expect(calcularTotal([])).toBe(0);
  });

  test('lanza error si items no es array', () => {
    expect(() => calcularTotal(null)).toThrow('items debe ser un array');
  });

  test('lanza error si hay precio negativo', () => {
    const items = [{ precio: -100, cantidad: 1 }];
    expect(() => calcularTotal(items)).toThrow('Precio y cantidad deben ser positivos');
  });
});