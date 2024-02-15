const { NotImplementedError } = require('../extensions/index.js');
const {parsers} = require("mocha/lib/cli/config");

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
  let maxNum = 0;
  let strNum = n.toString()
  for(let i =0; i < strNum.length; i++){
    const numStr = strNum.slice(0,i) + strNum.slice(i + 1)
    const newNum = parseInt(numStr, 10)
    if (newNum > maxNum){
      maxNum = newNum
    }
  }
  return maxNum
}

module.exports = {
  deleteDigit
};
