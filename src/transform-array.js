const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  return arr.reduce((result, current, index, array) => {
    switch (current) {
      case '--discard-next':
        array[index + 1] = undefined;
        return result;

      case '--discard-prev':
        if (array[index - 1] !== undefined) {
          result.pop();
        }
        return result;

      case '--double-next':
        if (array[index + 1] !== undefined) {
          result.push(array[index + 1]);
        }
        return result;

      case '--double-prev':
        if (array[index - 1] !== undefined && array[index - 2] !== '--discard-next') {
          result.push(array[index - 1]);
        }
        return result;

      default:
        if (current !== undefined) {
          result.push(current);
        }
        return result;
    }
  }, []);
}

module.exports = {
  transform
};
