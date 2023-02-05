function solve(year, month, day) {
  const date = new Date(year, month - 1, day - 1);
  const newYear = date.getFullYear();
  const newMonth = date.getMonth() + 1;
  const newDay = date.getDate();
  console.log(`${newYear}-${newMonth}-${newDay}`);
}

solve(2016, 9, 30);
solve(2015, 5, 10);
