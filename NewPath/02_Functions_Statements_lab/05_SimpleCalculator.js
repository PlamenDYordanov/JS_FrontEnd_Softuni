function solve(num1, num2, operator) {
const operators = {
    'multiply': (a, b) => a * b,
    'divide': (a, b) => a / b,
    'add': (num1, num2) => num1 + num2,
    'subtract': (num1, num2) => num1 - num2
    }
    console.log(operators[operator](num1,num2));
}
solve(5, 5, "multiply");
solve(12, 19, "add");
solve(50, 13, "subtract");
