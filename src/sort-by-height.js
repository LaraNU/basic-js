const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let i = 0
  let j
  while (i < arr.length) {
    j = i + 1;
    while (j < arr.length) {
      if (arr[j] < arr[i] && arr[j] > 0) {
        let curr = arr[i];
        arr[i] = arr[j];
        arr[j] = curr;
      }
      j++;
    }
    i++;
  }
  return arr
}

module.exports = {
  sortByHeight
};
