function solve(input) {
  let heroes = [];
  for (let curLine of input) {
    let [name, level, items] = curLine.split(" / ");
    level = Number(level);
    heroes.push({ name, level, items });
  }
let sorted = heroes.sort((left, right) => left.level - right.level)
for (const hero of sorted) {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`);
}

}
solve([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
solve([
  "Batman / 2 / Banana, Gun",
  "Superman / 18 / Sword",
  "Poppy / 28 / Sentinel, Antara",
]);
