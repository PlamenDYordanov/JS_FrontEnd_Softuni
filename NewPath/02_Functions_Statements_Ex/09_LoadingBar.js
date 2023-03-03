function solve(number) {
  let result = [".", ".", ".", ".", ".", ".", ".", ".", ".", "."];
  let steps = number / 10;
  if (steps !== 10) {
    for (let i = 0; i < steps; i++) {
      result[i] = "%";
    }
  } else {
    console.log("100% Complete!");
    return;
  }
  console.log(`${number}% [` + result.join("") + "]");
  console.log("Still loading...");
}
solve(30);
solve(50);
solve(100);
