const divide = require('./divide');

test('Divide 1 / 2 to be 0.5', () => {
  expect(parseFloat(divide(1, 2))).toBe(0.5);
});

test('Divide 1 / 0 to throw Error', () => {
  expect(() => divide(1, 0)).toThrow();
});
