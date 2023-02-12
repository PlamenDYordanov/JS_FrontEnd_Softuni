function solve(arr) {
    let sumRow = 0;
    let sumCol = 0;
//   let sumFirstRow = 0;
//   let sumNextRow = 0;
//   let result = true;
  //   for (let row = 0; row < arr.length; row++) {
  //     for (let col = 0; col < arr[row].length; col++) {
  //       if (row !== 0) {
  //         sumNextRow += arr[row][col];
  //       } else {
  //         sumFirstRow += arr[row][col];
  //       }

  //       }
  //       if (row !== 0) {
  //         if (sumFirstRow != sumNextRow) {
  //           result = false;
  //           break;
  //         } else {
  //           sumNextRow = 0;
  //         }
  //     }
  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
        sumCol += arr[row][0];
        sumRow += arr[row][col];
    }
   
  }
  if(sumCol === sumRow){
    console.log(true);
  }else {
    console.log(false);
  }
}
// console.log(result);
solve([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
solve([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1],
]);
solve([
  [1, 0, 0],
  [0, 0, 1],
  [0, 1, 0],
]);
