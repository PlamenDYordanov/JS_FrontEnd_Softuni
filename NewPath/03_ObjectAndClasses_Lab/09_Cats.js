function solve(input) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`)
    }
  }
  let arrayOfCats = [];
  for (const elements of input) {
    let [name, age] = elements.split(" ");
    arrayOfCats.push(new Cat(name, age));
  }
  for (const elements of arrayOfCats) {
    elements.meow();
  }
}
solve(["Mellow 2", "Tom 5"]);
solve(["Candy 1", "Poppy 3", "Nyx 2"]);
