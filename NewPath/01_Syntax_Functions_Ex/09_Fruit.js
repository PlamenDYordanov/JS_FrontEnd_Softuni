function solve(fruit, weight, price) {
let convertToKg = weight / 1000;
let totalPrice = convertToKg * price;
console.log(`I need $${totalPrice.toFixed(2)} to buy ${convertToKg.toFixed(2)} kilograms ${fruit}.`)
}
solve('orange', 2500, 1.80);
solve('apple', 1563, 2.35);