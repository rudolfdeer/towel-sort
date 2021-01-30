// You should implement your task here.

module.exports = function towelSort(matrix) {
  let result = [];

  if (!matrix || matrix.length == 0) {
    return result;
  } else {
    let col = matrix.length - 1; // number of rows - j

    for (let j = 0; j <= col; j++) {
      if (j == 0 || j % 2 == 0) {
        for (let i = 0; i <= matrix[j].length - 1; i++) {
          result.push(matrix[j][i]);
        }
      } else {
        for (let i = matrix[j].length - 1; i >= 0; i--) {
          result.push(matrix[j][i]);
        }
      }
    }

    return result;
  }
};
