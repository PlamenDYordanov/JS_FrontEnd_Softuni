function solve(text, count) {
  let result = [];
  for (let i = 0; i < count; i++) {
    result.push(text);
  }
  console.log(result.join(""));
}
solve("abc", 3);
solve("String", 2);
