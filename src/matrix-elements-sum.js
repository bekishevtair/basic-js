const { NotImplementedError } = require("../extensions/index.js")

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
function getMatrixElementsSum(matrix) {
  const colsWithZero = []

  return matrix.reduce((sum, row) => {
    row.forEach((value, col) => {
      if (!colsWithZero.includes(col)) {
        sum += value
        if (value === 0) colsWithZero.push(col)
      }
    })
    return sum
  }, 0)
}
getMatrixElementsSum([
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3]
])

module.exports = {
  getMatrixElementsSum
}
