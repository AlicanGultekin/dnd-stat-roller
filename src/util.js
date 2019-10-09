/**
 * Util module
 * @module util
 */

/**
 * Ensures a value is a number or throws
 *
 * @param value Value to be tested
 * @param {string} errorMessage Error message to be thrown if value is not a number
 * @param {Boolean} [condition=null] Optional condition check
 * @returns {number} Roll result
 */
exports.ensureNumberOrThrow = function(value, errorMessage, condition = null) {
  if (typeof value !== 'number' || condition === false) {
    throw new TypeError(errorMessage);
  }
};

/**
 * Sums numbers in an array
 *
 * @param {number[]} Array of numbers
 * @returns {number} Sum of the numbers in an array
 */
Array.prototype.sum = function() {
  return this.reduce((a, b) => a + b, 0);
};

const standardArray = [15, 14, 13, 12, 10, 8];
const standardArrayTotal = standardArray.sum();
/**
 * Prints D&D 5e standard stat array and its sum to the console
 *
 */
exports.printStandardArrayComparison = function() {
    console.log(`\nvs\nStandard Array: ${standardArray}\nTotal: ${standardArrayTotal}\n`);
};
