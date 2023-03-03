function solve(firstNum, secondNum) {
  const factorialFirst = Array.from(Array(firstNum + 1).keys())
    .slice(1)
    .reduce((a, v) => a * v);
  const factorialSecond = Array.from(Array(secondNum + 1).keys())
    .slice(1)
    .reduce((a, v) => a * v);
  let result = factorialFirst / factorialSecond;
  console.log(`${result.toFixed(2)}`);
}
solve(5, 2);
solve(6, 2);
