const {NotImplementedError} = require('../extensions/index.js');

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
    if (typeof str !== 'string') {
        str = String(str)
    }
    let add = Array(options.additionRepeatTimes ? options.additionRepeatTimes : 1)
        .fill(options.addition !== undefined ? String(options.addition,true): '')
        .join(options.additionSeparator ? options.additionSeparator : '|')

    return Array(options.repeatTimes ? options.repeatTimes : 1)
        .fill(str + add)
        .join(options.separator ? options.separator : '+')
}


module.exports = {
    repeater
};
