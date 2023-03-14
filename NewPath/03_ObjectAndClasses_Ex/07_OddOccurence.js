function solve(input) {
  let obj = {};
  input = input.split(" ");
  for (let symbol of input) {
    symbol = symbol.toLowerCase();
    if (!obj.hasOwnProperty(symbol)) {
      obj[symbol] = 1;
    } else {
      obj[symbol] += 1;
    }
  }
  let result = [];
  for (const key in obj) {
    if (obj[key] % 2 !== 0) {
      result.push(key);
    }
  }
  console.log(result.join(" "));
}
solve("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
solve("Cake IS SWEET is Soft CAKE sweet Food");
