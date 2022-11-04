const divide = require('./divide');

test('Divide 1 / 2 to be 0.5', () => {
  expect(parseFloat(divide(1, 2))).toBe(0.5);
});