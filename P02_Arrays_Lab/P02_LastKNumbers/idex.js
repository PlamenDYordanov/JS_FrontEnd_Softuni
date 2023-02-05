function solve(start, backwards) {
  let myArr = [];
  myArr[0] = 1;
  let diffIndex = 0;
  let currIndex = 0;

  for (let i = 0; i < start - 1; i++) {
    diffIndex = currIndex;
    let sum = 0;
    for (let j = backwards; j > 0; j--) {
      if (diffIndex < 0) {
        break;
      }
      sum += myArr[diffIndex];
      diffIndex--;
    }
    myArr.push(sum);
    currIndex++;
  }
  return myArr;
}
console.log(solve(6, 3));
console.log(solve(8, 2));
