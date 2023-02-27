// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    let result = [];

    for (let rowI = 0; rowI < matrix.length; ++rowI) {
        if (rowI % 2 === 0) {
            for (let i = 0; i < matrix[rowI].length; ++i) {
                result.push(matrix[rowI][i]);
            }
        } else {
            for (let i = matrix[rowI].length - 1; i >= 0; --i) {
                result.push(matrix[rowI][i]);
            }
        }
    }

    return result;
}
