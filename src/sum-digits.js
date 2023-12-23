const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  n = n.toString()
  let count = 0
  for (let i = 0; i < n.length; i++) {
    count += Number(n[i])
  }
  if (count > 9) {
    count = count.toString()
    let newCount = 0
    for (let i = 0; i < count.length; i++) {
      newCount += Number(count[i])
    }
    return newCount
  }
  return count
}

module.exports = {
  getSumOfDigits
};
