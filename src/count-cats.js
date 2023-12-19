const { NotImplementedError } = require("../extensions/index.js")

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let cats = 0
  for (let i = 0; i < matrix.length; i++) {
    const el = matrix[i]
    for (let j = 0; j < el.length; j++) {
      el[j] === "^^" ? cats++ : cats
    }
  }
  return cats
}

// countCats([
//   [0, 1, "^^"],
//   [0, "^^", 2],
//   ["^^", 1, 2]
// ])
module.exports = {
  countCats
}
