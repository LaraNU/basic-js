const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainArr: [],

  getLength() {
    return this.chainArr.length
  },
  addLink(value) {
    this.chainArr.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    if (typeof position !== 'number' || position <= 0 || position > this.chainArr.length) {
      this.chainArr = []
      throw new Error("You can\'t remove incorrect link!")
    }
    this.chainArr = this.chainArr.slice(0, position - 1).concat(this.chainArr.slice(position, this.chainArr.length))
    return this
  },
  reverseChain() {
    this.chainArr.reverse()
    return this
  },
  finishChain() {
    const result = this.chainArr.join('~~')
    this.chainArr = []
    return result
  }
};

module.exports = {
  chainMaker
};
