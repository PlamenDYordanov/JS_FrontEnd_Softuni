function solve(input) {
  for (let element of input) {
    let [town, latitude, longitude] = element.split(" | ");
    let townObject = {
      town: town,
      latitude: Number(latitude).toFixed(2),
      longitude: Number(longitude).toFixed(2),
    };
    console.log(townObject);
  }
  //   let entries = Object.entries(townObject);
  //   for (let [key, values] of entries) {
  //     console.log(values);
  //   }
}
solve(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
solve(["Plovdiv | 136.45 | 812.575"]);
