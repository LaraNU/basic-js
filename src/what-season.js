const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (arguments.length === 0) {
    return 'Unable to determine the time of year!'
  }
  const winter = [11, 0, 1]
  const spring = [2, 3, 4]
  const summer = [5, 6, 7]
  const autumn = [8, 9, 10]
  
  try {
    if (date instanceof Date) {
      date.toDateString()
      const month = date.getMonth()
      if (winter.includes(month)) {
        return 'winter'
      } else if (spring.includes(month)) {
        return 'spring'
      } else if (summer.includes(month)) {
        return 'summer'
      } else if  (autumn.includes(month)) {
        return 'autumn'
      } else {
        throw new Error("Invalid season!");
      }
    } else {
      throw new Error("Invalid date!");
    }
  } catch(error) {
    throw new Error("Invalid date!");
  }
}

module.exports = {
  getSeason
};
