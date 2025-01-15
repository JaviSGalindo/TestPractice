const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});
// Tarea de test de la funcion divide
test('divide 20 / 10 to equal 2', () => {
  expect(calculator.divide(20, 10)).toBe(2)
});
// Tarea de test de la funcion divide
test('divide 12 / 4 to equal 3', () => {
  expect(calculator.divide(20, 10)).toBe(2)
});
// Tarea de test de la funcion multiply
test('multiply 3.5 * 2 to equal 7', () => {
  expect(calculator.multiply(3.5, 2)).toBe(7)
});
// Tarea de test de la funcion multiply
test('multiply 20 * 100 to equal 2000', () => {
  expect(calculator.multiply(20, 100)).toBe(2000)
});
// Tarea de test de la funcion divide cuando el segundo parametro es 0
test('divide 12 / 0 to equal undefined', () => {
  expect(calculator.divide(12, 0)).toBe(undefined)
});

// Tarea de test de la funcion divide cuando el segundo parametro es 0
test('divide 20 / 0 to equal undefined', () => {
  expect(calculator.divide(12, 0)).toBeUndefined();
});