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
function encodeLine(str) {
  str = str.split('')
  const map = new Map()
  let result = []
  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      map.set(str[i], map.get(str[i]) + 1)
    } else {
      map.set(str[i], 1)
    }
  }
  const newObj = Object.fromEntries(map.entries())
  for (const [key, value] of Object.entries(newObj)) {
    if (value > 1) {
      result.push(`${value}${key}`)
    } else {
      result.push(`${key}`)
    }
  }

  return result.join('')
}

module.exports = {
  encodeLine
};
