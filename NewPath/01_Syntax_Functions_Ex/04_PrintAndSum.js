function solve(startNum, lastNum) {
let result = [];
for(let i = startNum; i <= lastNum; i++){
    result.push(i);
}
let sum = result.reduce((a,v) => a + v, 0);
console.log(result.join(' '));
console.log(`Sum: ${sum}`);
}
solve(5, 10);
solve(0, 26);
solve(50, 60);