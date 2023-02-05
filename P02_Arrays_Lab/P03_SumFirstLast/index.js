function solve(arr) {
  const first = arr.shift();
  const last = arr.pop();
  const sum = Number(first) + Number(last);
  console.log(sum);
}
solve(["20", "30", "40"]);
solve(["5", "10"]);
