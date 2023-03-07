function solve(input) {
  let productData = {};
  for (let elements of input) {
    elements = elements.split(" | ");
    let town = elements[0];
    let product = elements[1];
    let price = Number(elements[2]);
    if (!productData.hasOwnProperty(product)) {
      productData[product] = { price, town };
    } else {
      if (price < productData[product].price) {
        // productData[product].price = price;
        productData[product] = { town, price };
      }
    }
  }
  let productNames = Object.keys(productData);
  for (let i = 0; i < productNames.length; i++) {
    let currentNameOfProduct = productNames[i];
    console.log(
      `${currentNameOfProduct} -> ${productData[currentNameOfProduct].price} (${productData[currentNameOfProduct].town})`
    );
  }
}
solve([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
