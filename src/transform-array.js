const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(/* arr */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // '--discard-prev' - если попадается данная строка, то удаляю элемент до неё и саму строку
  // '--double-next' - удваиваю значение стоящее перед ней и удаляю строку (точнее добавляю ещё один элемент, копирую +1)
  // Не, дублирование, это +1 в данном случае [1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]
  // if (Array.isArray(arr)) - проверка на то приходит к нам массив или нет, ожидаем массив
  // '--discard-prev' - 
  // '--discard-next'
  // '--double-prev'
  // '--double-next'
}

module.exports = {
  transform
};
