const {NotImplementedError} = require('../extensions/index.js');

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
    if(arr.includes(-1)){
        let sorted = []
        for (let j = 0; j < arr.length; j++) {
            if(arr[j] !== -1){
                sorted.push(arr[j])
            }
        }
        let index = 0
        for (let i = 0; i < arr.length; i++){
            if (arr[i] !== -1){
                arr[i] = sorted.sort((a,b) => a - b)[index++]
            }
        }
        return arr
    }else{
        return  arr.sort((a,b) => a - b)
    }
}

module.exports = {
    sortByHeight
};
