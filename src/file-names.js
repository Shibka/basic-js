const {NotImplementedError} = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
    if (names.length === 0) {
        return []
    }
    const arr = new Set(names)
    arr.forEach((el) => {
        let count = 0;
        for (let i = 0; i < names.length; i++) {
            if (names[i] === el) {
                count += 1
                if (count > 1) {
                    names[i] = names[i] + '(1)';
                }
                if (count >= 3 && names[i].includes('(1)')) {
                  names[i] = names[i].replace('(1)','(2)');
                }
            }
        }
    })
    return names
}

console.log(renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc']))

module.exports = {
    renameFiles
};
