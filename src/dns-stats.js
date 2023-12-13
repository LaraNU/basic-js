const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const map = new Map()
  for (let i = 0; i < domains.length; i++) {
    domains[i] = domains[i].split('.').reverse()
  }
  for (let i = 0; i < domains.length; i++) {
    for (let j = 0; j < domains[i].length; j++) {
      let dom = `.${domains[i].slice(0, j+1).join('.')}`
      if (map.has(dom)) {
        map.set(dom, map.get(dom) + 1)
      } else {
        map.set(dom, 1)
      }
    }
  }
  return Object.fromEntries(map.entries())
}

module.exports = {
  getDNSStats
};
