function solve(...parms) {
  let number = Number(parms[0]);
  for (let i = 1; i < parms.length; i++) {
    switch (parms[i]) {
      case "chop":
        number /= 2;
        console.log(number);
        break;
      case "dice":
        number = Math.sqrt(number);
        console.log(number);
        break;
      case "spice":
        number += 1;
        console.log(number);
        break;
      case "bake":
        number *= 3;
        console.log(number);
        break;
      case "fillet":
        number = number - number * 0.2;
        console.log(number);
        break;
    }
  }
}
solve("32", "chop", "chop", "chop", "chop", "chop");
solve("9", "dice", "spice", "chop", "bake", "fillet");
