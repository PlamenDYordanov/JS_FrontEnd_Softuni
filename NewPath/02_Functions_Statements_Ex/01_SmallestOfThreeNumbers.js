function solve(...parms) {
  let smallestNum = Number.MAX_SAFE_INTEGER;
  for (const num of parms) {
    findBiggestNum(num);
  }

  function findBiggestNum(number) {
    if (number < smallestNum) {
      smallestNum = number;
    }
  }
  console.log(smallestNum);
}
solve(2, 5, 3);
solve(2, 2, 2);
