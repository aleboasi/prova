const math = require('../src/math');

describe('Operazioni matematiche di base', () => {
  test('add somma due numeri', () => {
    expect(math.add(2, 3)).toBe(5);
  });

  test('subtract sottrae due numeri', () => {
    expect(math.subtract(5, 2)).toBe(3);
  });

  test('multiply moltiplica due numeri', () => {
    expect(math.multiply(4, 3)).toBe(12);
  });

  test('divide divide due numeri', () => {
    expect(math.divide(10, 2)).toBe(5);
  });

  test('divide lancia errore se divisore è zero', () => {
    expect(() => math.divide(5, 0)).toThrow('Division by zero');
  });
});