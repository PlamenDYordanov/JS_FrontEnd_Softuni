function solve(number) {
  let sum = 0;
  let divisors = number / 2;
  for (let i = divisors; i >= 1; i--) {
    if (number % i === 0) {
      sum += i;
    }
  }
  if ((sum === number)) {
    console.log("We have a perfect number!");
  }else{
    console.log("It's not so perfect.");
  }
}
solve(6);
solve(28);
solve(1236498);
