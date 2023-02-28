function solve(grade) {
  let result = "";
  if (grade < 3) {
    result = "Fail";
  } else if (grade < 3.5) {
    result = "Poor";
  } else if (grade < 4.5) {
    result = "Good";
  } else if (grade < 5.5) {
    result = "Very good";
  } else {
    result = "Excellent";
  }
  if (result === "Fail") {
    console.log(`${result} (2)`);
  } else {
    console.log(`${result} (${grade.toFixed(2)})`);
  }
}
solve(3.33);
solve(4.5);
solve(2.99);
