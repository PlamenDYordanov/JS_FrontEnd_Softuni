function solve(type, count) {
  const typeOfProduct = {
    'coffee': (count) => count * 1.5,
    'water': (count) => count * 1,
    'coke': (count) => count * 1.4,
    'snack': (count) => count * 2.0,
  };
  console.log(`${typeOfProduct[type](count).toFixed(2)}`);
}
solve("water", 5);
solve("coffee", 2);
