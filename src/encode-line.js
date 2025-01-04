const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
  return str
    .split('')
    .reduce((acc, current, index, arr) => {
      if (current === arr[index - 1]) {
        acc[acc.length - 1].count += 1;
      } else {
        acc.push({ char: current, count: 1 });
      }
      return acc;
    }, [])
    .map(({ char, count }) => (count > 1 ? `${count}${char}` : char))
    .join('');
}

module.exports = {
  encodeLine
};
