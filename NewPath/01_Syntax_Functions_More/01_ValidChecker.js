function solve(x1, y1, x2, y2) {
  let result = 0;
  //first {x1, y1} to {0, 0}, then {x2, y2} to {0, 0} and finally {x1, y1} to {x2, y2}.
  //first
  isValid(x1, y1, 0, 0);
  isValid(x2, y2, 0, 0);
  isValid(x1, y1, x2, y2);
  function isValid(x1, y1, x2, y2) {
    result = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    if (Number.isInteger(result)) {
      console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
      console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
  }
}
solve(3, 0, 0, 4);
solve(2, 1, 1, 1);
