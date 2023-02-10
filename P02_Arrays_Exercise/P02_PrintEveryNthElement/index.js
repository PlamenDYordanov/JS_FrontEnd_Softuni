function solve(input, step) {
  let arr = [];
  for (let i = 0; i < input.length; i += step) {
    arr.push(input[i]);
  }
  console.log(arr.join(","));
}
solve(["5", "20", "31", "4", "20"], 2);
solve(["dsa", "asd", "test", "tset"], 2);
solve(["1", "2", "3", "4", "5"], 6);
