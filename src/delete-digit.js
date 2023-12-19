const { NotImplementedError } = require("../extensions/index.js")

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
function deleteDigit(n) {
  let numbers = String(n).split("").map(Number)
  return Math.max(
    ...numbers.map((number, i) => {
      let arr = numbers.slice()
      arr.splice(i, 1)
      return Number(arr.join(""))
    })
  )
}

deleteDigit(152)

module.exports = {
  deleteDigit
}
