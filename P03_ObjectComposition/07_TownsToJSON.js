function solve(arr) {
  let result = [];
  let data = {};
  for (let i = 1; i < arr.length; i++) {
    let tokens = arr[i].split(" | ");
    let town = tokens[0].split("| ")[1];
    let latitude = Number(tokens[1]).toFixed(2);
    let longitude = Number(tokens[2].split(" |")[0]).toFixed(2);
    data = {
      Town: town,
      Latitude: Number(latitude),
      Longitude: Number(longitude),
    };
    result.push(data);
    // data[town] = {latitude, longitude};
  }
  console.log(JSON.stringify(result));
}
solve([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
solve([
  "| Town | Latitude | Longitude |",
  "| Veliko Turnovo | 43.0757 | 25.6172 |",
  "| Monatevideo | 34.50 | 56.11 |",
]);
