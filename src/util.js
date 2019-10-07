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
}