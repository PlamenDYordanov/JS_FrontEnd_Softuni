function solve(number) {
  let sum = number
    .toString()
    .split('')
    .map((element) => Number(element))
    .reduce((a, v) => a + v, 0);
  console.log(sum);
}
solve(245678);
solve(97561);
solve(543);
