const {NotImplementedError} = require('../extensions/index.js');

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
    let arr = n.toString().split('')
    let a = []
    let sum = Number(arr[0])
    for (let i = 0; i < arr.length-1; i++) {
            sum += Number(arr[i+1])
    }
    a.push(sum)
    let b = a.join('')
    b.split('')
    for (let i = 0; i < b.length -1; i++){
        sum = Number(b[0])
        if (b.length >= 1) {
            sum += Number(b[i+1])
        }
    }
    return sum
}

module.exports = {
    getSumOfDigits
};
