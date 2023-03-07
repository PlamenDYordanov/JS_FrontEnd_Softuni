function solve(heroes) {
  let result = [];

  for (let index = 0; index < heroes.length; index++) {
    let heroElements = heroes[index].split(" / ");
    let heroName = heroElements[0];
    let heroLevel = Number(heroElements[1]);
    let curItems = heroElements[2];
    curItems = curItems ? curItems.split(', ') : [];
    let data = {};

    data = {
      name: heroName,
      level: heroLevel,
      items: curItems,
    };
    result.push(data);
  }
  console.log(JSON.stringify(result));
}

  solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara",
  ])
;
solve(["Jake / 1000 / Gauss, HolidayGrenade"]);
