function sum (num1, num2) {
    let firstNumber = Number(num1)
    let secondNumber = Number(num2)
    let totalSum = 0;
    
   for (let i = firstNumber; i <= secondNumber; i++) {
    totalSum += i;
   }
  console.log(totalSum);
}
sum('1', '5');
sum('-8', '20');