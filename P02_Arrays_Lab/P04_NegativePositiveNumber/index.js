function solve(arr) {
  let myArr = [];
  for (let el of arr) {
    if (el < 0) {
      myArr.unshift(el);
    } else {
      myArr.push(el);
    }
  }
  for (let element of myArr) {
    console.log(element);
  }
}
solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);
