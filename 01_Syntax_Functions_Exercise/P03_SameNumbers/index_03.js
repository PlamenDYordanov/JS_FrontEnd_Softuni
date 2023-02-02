function solve(number) {
//   let stringNumber = String(number);
//   let firstNumber = stringNumber[0];
//   let totalSum  = Number(firstNumber);
//   let isSame = true;
//   for (let i = 1; i < stringNumber.length; i++) {
//     if (firstNumber !== stringNumber[i]) {
//       isSame = false;
//     }
//     totalSum += Number(stringNumber[i]);
//   }
//   console.log(isSame);
//   console.log(totalSum);
let arr = String(number).split('').map(n => Number(n));
let isSame = arr.filter(n => n !== arr[0]).length ? false : true;
let sum = 0;
arr.map(n => sum += n);// let sum = arr.reduce((acc, num) => acc + num);

// if (isSame.length > 0 ){
//     console.log(false)
// }
// else {
//     console.log(true)
// }
console.log(isSame);
console.log(sum);
}
solve(2222222);
solve(1234);
