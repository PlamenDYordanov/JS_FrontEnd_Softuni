function solve(number) {
  let matrix = [number][number];
  for (let i = 0; i < number; i++) {
    let result = [];
    for (let j = 0; j < number; j++) {
      result.push(number);
    }
    console.log(result.join(" "));
  }
}
solve(3);
solve(7);
