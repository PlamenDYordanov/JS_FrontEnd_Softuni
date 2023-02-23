function solve(array) {
  let firstNum = array[0];
  let lastNum = array[array.length - 1];
  let result = firstNum + lastNum;
  console.log(result);
}

solve([20, 30, 40]);
solve([10, 17, 22, 33]);
solve([11, 58, 69]);
