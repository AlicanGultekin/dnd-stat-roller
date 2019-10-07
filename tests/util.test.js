const util = require('../src/util');

const testErrorMessage = 'test error message';

test('should throw if not a number', () => {
  expect(() => {
    util.ensureNumberOrThrow(null, testErrorMessage);
  }).toThrow(TypeError);

  expect(() => {
    util.ensureNumberOrThrow('asd', testErrorMessage);
  }).toThrow(TypeError);

  expect(() => {
    util.ensureNumberOrThrow({}, testErrorMessage);
  }).toThrow(TypeError);

  expect(() => {
    util.ensureNumberOrThrow([], testErrorMessage);
  }).toThrow(TypeError);
});

test('should throw if condition is not met', () => {
  expect(() => {
    util.ensureNumberOrThrow(1, testErrorMessage, 1 === 2);
  }).toThrow(TypeError);
});