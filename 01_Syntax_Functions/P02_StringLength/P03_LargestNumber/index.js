function largestNumber(number1, number2, number3) {
  if (number1 > number2 && number1 > number3) {
    console.log(`The largest number is ${number1}.`);
  } else if (number2 > number1 && number2 > number3) {
    console.log(`The largest number is ${number2}.`);
  } else {
    console.log(`The largest number is ${number3}.`);
  }
}
largestNumber(5, -3, 16);
largestNumber(-3, -5, -22.5);
