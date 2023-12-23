const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str)
  let separator = options.separator || "+"
  let repeatTimes = options.repeatTimes || 1
  let additionRepeatTimes = options.additionRepeatTimes || 1
  let addition = options.addition !== undefined ? String(options.addition) : ''
  let additionSeparator = options.additionSeparator || '|'

  function repeatStr(s, repeatCount) {
    let resArr = []
    for (let i = 0; i < repeatCount; i++) {
      resArr.push(s)
    }
    return resArr
  }

  let additioArr = repeatStr(addition, additionRepeatTimes)
  addition = additioArr.join(additionSeparator)
  str = str + addition
  let resultArr = repeatStr(str, repeatTimes)
  return resultArr.join(separator)
}

module.exports = {
  repeater
};
