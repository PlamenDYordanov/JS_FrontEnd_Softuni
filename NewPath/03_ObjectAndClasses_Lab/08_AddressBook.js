function solve(input) {
  let addressBook = {};
  for (const elements of input) {
    let [name, address] = elements.split(":");
    addressBook[name] = address;
  }
  let entries = Object.entries(addressBook);
  let sortedByName = entries.sort((left, right) => {
    return left[0].localeCompare(right[0]);
  });
  sortedByName.forEach((elements) =>
    console.log(`${elements[0]} -> ${elements[1]}`)
  );
}
solve([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
solve([
  "Bob:Huxley Rd",
  "John:Milwaukee Crossing",
  "Peter:Fordem Ave",
  "Bob:Redwing Ave",
  "George:Mesta Crossing",
  "Ted:Gateway Way",
  "Bill:Gateway Way",
  "John:Grover Rd",
  "Peter:Huxley Rd",
  "Jeff:Gateway Way",
  "Jeff:Huxley Rd",
]);
