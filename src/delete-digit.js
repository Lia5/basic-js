const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  const digits = n.toString().split('');
  const numbers = digits.map((_, index) => {
    const newDigits = digits.slice(0, index).concat(digits.slice(index + 1));
    return parseInt(newDigits.join(''), 10);
  });
  return Math.max(...numbers);
}

module.exports = {
  deleteDigit
};
