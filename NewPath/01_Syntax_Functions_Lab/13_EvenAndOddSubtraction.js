function solve(array) {
let evenNumbers = array.filter((num) => num % 2 === 0);
let oddNumbers = array.filter((num) => num % 2 !== 0);
let result = evenNumbers.reduce((a,v) => a + v, 0) - oddNumbers.reduce((a,v) => a + v, 0);
console.log(result);
}
solve([1,2,3,4,5,6]);
solve([3,5,7,9]);
solve([2,4,6,8,10]);