function solve(type, count) {
  const typeOfProduct = {
    'coffee': (count) => count * 1.50,
    'water': (count) => count * 1.00,
    'coke': (count) => count * 1.40,
    'snacks': (count) => count * 2.00,
  };
  console.log(`${typeOfProduct[type](count).toFixed(2)}`);
}

solve("coffee", 2);
