function solve(input) {
let type = typeof input;
if(type !== "number") {
    console.log(`We can not calculate the circle area, because we receive a ${type}.`)
}else {
    let result = 0;
    result = Math.PI * (input ** 2);
    console.log(result.toFixed(2));
}
}
solve(5);
solve("name");
