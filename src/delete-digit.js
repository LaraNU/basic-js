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
function deleteDigit(n) {
  n = n.toString().split('')
  let arr = []
  for (let delim = 0; delim < n.length; delim++) {
    arr.push(
      Number(
        n.slice(0, delim).join('') + n.slice(delim + 1, n.lenght).join('')
      )
    )
  }
  return Math.max(...arr)
}

module.exports = {
  deleteDigit
};
