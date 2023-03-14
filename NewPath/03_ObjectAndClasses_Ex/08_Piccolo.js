function solve(input) {
  let parkingSlot = new Set()
  for (let line of input) {
    let [command, carNumber] = line.split(", ");
    if (command === "IN") {
      parkingSlot.add(carNumber);
    } else if (command === "OUT") {
    parkingSlot.delete(carNumber);
    }
  }
  if(parkingSlot.size === 0) {
    console.log("Parking Lot is Empty");
  }else {

  }
  let sorted = [...parkingSlot.keys()].sort((a,b) => a.localeCompare(b))
  .forEach((car) => console.log(car));    
//   for (const car of parkingSlot) {
//     console.log(car);
//   }
}
solve([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
solve(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
