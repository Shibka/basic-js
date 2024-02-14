const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let a = 0;
  const newS2 = s2.split('').sort()
  const newS1 = s1.split('').sort()
  for(let i = 0; i < newS2.length; i++){
    if(newS1.includes(newS2[i])){
      a+= 1
      newS1.shift()
    }
  }
  return a
}

// function getCommonCharacterCount(s1, s2) {
//   let a = 0;
//   for(let i = 0; i < s2.length; i++){
//     if(s1.includes(s2[i])){
//       s1 = s1.replace(s2[i],'')
//       a += 1
//     }
//   }
//   return a
// }

console.log(getCommonCharacterCount('aabcc', 'adcaa'))
module.exports = {
  getCommonCharacterCount
};
