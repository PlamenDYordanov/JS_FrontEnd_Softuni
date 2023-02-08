function solve(matrix) {
  let totalEqualNeighbors = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix.length; col++) {
      let currentSymbol = matrix[row][col];
      //top
      if (row - 1 >= 0) {
        if (currentSymbol === matrix[row - 1][col]) {
          totalEqualNeighbors++;
          matrix[row][col] = null;
        }
      }
      //right
      if (col + 1 <= matrix.length - 1) {
        if (currentSymbol === matrix[row][col + 1]) {
          totalEqualNeighbors++;
          matrix[row][col] = null;
        }
      }
      //down
      if (row + 1 <= matrix.length - 1) {
        if (currentSymbol === matrix[row + 1][col]) {
          totalEqualNeighbors++;
          matrix[row][col] = null;
        }
      }
      //left
      if (col - 1 >= 0) {
        if (currentSymbol === matrix[row][col - 1]) {
          totalEqualNeighbors++;
          matrix[row][col] = null;
        }
      }
    }
  }
  return totalEqualNeighbors;
}

console.log(
  solve([
    ["2", "3", "4", "7", "0"],
    ["4", "0", "5", "3", "4"],
    ["2", "3", "5", "4", "2"],
    ["9", "8", "7", "5", "4"],
  ])
);
console.log(
  solve([
    ["test", "yes", "yo", "ho"],
    ["well", "done", "yo", "6"],
    ["not", "done", "yet", "5"],
  ])
);
