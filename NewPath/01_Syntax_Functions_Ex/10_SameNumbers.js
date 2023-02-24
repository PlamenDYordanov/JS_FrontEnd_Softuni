function solve(number) {
    let arr = number.toString()
    .split('')
    let firstNum = arr[0];
    let isSame = true;
    let sum = 0;
for (const curElement of arr) {
    if (curElement !== firstNum) {
        isSame = false;
    }
    sum += Number(curElement)
}
console.log(isSame);
console.log(sum);
}
solve(2222222);
solve(1234);
