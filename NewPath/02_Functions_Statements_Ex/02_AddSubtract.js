function sum(...numbers) {
let sum = numbers[0] + numbers[1];
let subNum = numbers[2]
function subtract () {
    return sum - subNum;
}
let result =  subtract();
console.log (result);
}

sum(23, 6, 10);
sum(1, 17, 30);
