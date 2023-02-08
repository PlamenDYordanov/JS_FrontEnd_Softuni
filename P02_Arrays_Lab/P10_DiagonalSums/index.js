function solve(matrix) {
  let sumMainDiagona = 0;
  let sumSecndaryDiagona = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (i == j) {
        sumMainDiagona += matrix[i][j];
      }
      if (j == matrix.length - 1 -  i) {
        sumSecndaryDiagona += matrix[i][j];
      }
    }
  }
  console.log(sumMainDiagona);
  console.log(sumSecndaryDiagona);
}
solve([
  [20, 40],
  [10, 60],
]);
solve([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]);
