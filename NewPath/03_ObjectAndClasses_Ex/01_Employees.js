function solve(input) {
  // Object.entries(input.reduce((data, element) =>{
  //     data[element] = element.length;
  //     return data;
  // }, {})
  // ).forEach(([element, length]) => console.log(`Name: ${element} -- Personal Number: ${length}`))
  let obj = {};
  input.map((element) => (obj[element] = element.length));
  for (const key in obj) {
    console.log(`Name: ${key} -- Personal Number: ${obj[key]}`);
  }
}
solve([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
solve(["Samuel Jackson", "Will Smith", "Bruce Willis", "Tom Holland"]);
