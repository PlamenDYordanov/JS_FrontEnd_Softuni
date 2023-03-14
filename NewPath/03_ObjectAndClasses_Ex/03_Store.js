function solve(stocked, ordered) {
  let combineArrays = [...stocked, ...ordered];
  let storageProduct = {};
  for (let index = 0; index < combineArrays.length; index+=2) {
    let product = combineArrays[index];
    let count = Number(combineArrays[index + 1]);
    if (!storageProduct.hasOwnProperty(product)) {
      storageProduct[product] = count;
    } else {
      storageProduct[product] += count;
    }
  }
  for (const key in storageProduct) {
   console.log(`${key} -> ${storageProduct[key]}`)
        
    }
  }
solve(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
solve(
  ["Salt", "2", "Fanta", "4", "Apple", "14", "Water", "4", "Juice", "5"],
  ["Sugar", "44", "Oil", "12", "Apple", "7", "Tomatoes", "7", "Bananas", "30"]
);
