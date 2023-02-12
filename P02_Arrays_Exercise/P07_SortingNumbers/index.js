function solve(arr) {
  let result = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length / 2; i++) {
    result.push(arr[i]);
    result.push(arr[arr.length - 1 - i]);
  }
  console.log(result);
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
