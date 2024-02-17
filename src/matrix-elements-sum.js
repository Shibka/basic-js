const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
    let sum =0;
    let bellow = Array(matrix[0].length).fill(false)
    for (let i = 0; i <matrix.length; i++){
        for (let j = 0; j < bellow.length; j ++){
            if (matrix[i][j] === 0){
                bellow[j] = true
            }else if(!bellow[j]){
                sum += matrix[i][j]
            }
        }
    }
    return sum
}

console.log(getMatrixElementsSum([
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3],
]))

module.exports = {
    getMatrixElementsSum
};
