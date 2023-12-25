const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  return matrix.map((Array, rowIndex) => {
    return Array.map((n, columnIndex) => {
      let count = 0;
      for (let row = Math.max(0, rowIndex - 1); row <= Math.min(rowIndex + 1, matrix.length - 1); row++) {
        for (let col = Math.max(0, columnIndex - 1); col <= Math.min(columnIndex + 1, Array.length - 1); col++) {
          if (matrix[row][col] && !(row === rowIndex && col === columnIndex)) {
            count += 1;
          }
        }
      }
      return count;
    });
  });
}

module.exports = {
  minesweeper
};
