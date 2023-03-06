function sum(...numbers) {
    const sum = (a ,b) => a+b;
    const subtract = (a,b) => a-b; 
// let sum = numbers[0] + numbers[1];
// let subNum = numbers[2]
// function subtract () {
//     return sum - subNum;
// }
// let result =  subtract();
console.log (subtract(sum(numbers[0], numbers[1]), numbers[2]));
}

sum(23, 6, 10);
sum(1, 17, 30);
