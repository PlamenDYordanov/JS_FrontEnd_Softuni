function solve(...params) {
let sortParms = params.sort((a,b) => b - a);
console.log(`The largest number is ${sortParms[0]}.`);
}
solve(5, -3, 16);
solve(-3, -5, -22.5);
