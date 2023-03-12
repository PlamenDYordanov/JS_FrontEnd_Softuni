function solve(phones) {
  let phoneBook = {};
  for (const element of phones) {
    let [name, number] = element.split(" ");
    phoneBook[name] = number;
  }
  for (const key in phoneBook) {
    console.log(`${key} -> ${phoneBook[key]}`);
  }
}

solve([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
solve(["George 0552554", "Peter 087587", "George 0453112", "Bill 0845344"]);
