const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum( matrix ) {
  return matrix[0]
    .map((_, colIndex) => {
      return matrix.reduce((sum, row, rowIndex) => {
        if (rowIndex > 0 && matrix[rowIndex - 1][colIndex] === 0) return sum;
        return sum + row[colIndex];
      }, 0);
    })
    .reduce((total, colSum) => total + colSum, 0);
}

module.exports = {
  getMatrixElementsSum
};
