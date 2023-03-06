function solve(first,second,third) {//...parms) {
  // let smallestNum = Number.MAX_SAFE_INTEGER;
  // for (const num of parms) {
  //   findBiggestNum(num);
  // }

  // function findBiggestNum(number) {
  //   if (number < smallestNum) {
  //     smallestNum = number;
  //   }
  // }
  let smallestNum = Math.min(first,second,third);
  console.log(smallestNum);
}
solve(2, 5, 3);
solve(2, 2, -2);
