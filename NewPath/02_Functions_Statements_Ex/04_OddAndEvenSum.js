function solve(number) {
  let numberToString = String(number);
  let evenSum = 0;
  let oddSum = 0;
  for (const curNumber of numberToString) {
    let digit = Number(curNumber);
    if (digit % 2 === 0) {
      evenSum += digit;
    } else {
      oddSum += digit;
    }
  }
  console.log(` Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
solve(1000435);
solve(3495892137259234);
