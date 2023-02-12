function solve(arr) {
arr.sort((a,b) => a.localeCompare(b));
// for(let i = 0; i < arr.length; i++) {
//     console.log(i+1 + '.' + arr[i]);
// }
arr.forEach((element, index )=> {
    console.log(index + 1 + '.' + element)
});
};
solve(["John", "Bob", "Christina", "Ema"]);