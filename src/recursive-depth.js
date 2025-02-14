const { NotImplementedError } = require("../extensions/index.js")

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let arrDepth = 1
    for (const nestedEl of arr) {
      if (Array.isArray(nestedEl)) {
        const nestedElDepth = this.calculateDepth(nestedEl) + 1
        arrDepth = Math.max(arrDepth, nestedElDepth)
      }
    }
    console.log(arrDepth)
    return arrDepth
  }
}
const depthCalc = new DepthCalculator()

depthCalc.calculateDepth([1, 2, 3, [4, 5]])

module.exports = {
  DepthCalculator
}
