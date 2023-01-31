function solve(num1, num2) {
  num1 = Math.abs(num1);
  num2 = Math.abs(num2);

  while (num2 > 0) {
    let x = num2;
    num2 = num1 % num2;
    num1 = x;
  }
  console.log(num1);
}

solve(15, 5);
solve(2154, 458);
