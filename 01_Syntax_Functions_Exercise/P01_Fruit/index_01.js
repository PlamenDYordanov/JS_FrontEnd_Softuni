function solve(typeOfFruit, weightInKg, price) {
    let weightInGrams = weightInKg / 1000;
    let totalPrice = weightInGrams * price;

    console.log (`I need $${totalPrice.toFixed(2)} to buy ${weightInGrams.toFixed(2)} kilograms ${typeOfFruit}.`)
}

solve('orange', 2500, 1.80)
solve('apple', 1563, 2.35)