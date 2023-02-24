function solve(countOfPeople, typeOfGroup, dayOfWeek) {
  let totalPrice = 0;
  switch (typeOfGroup) {
    case "Students":
      if (dayOfWeek === "Friday") {
        totalPrice = countOfPeople * 8.45;
      } else if (dayOfWeek === "Saturday") {
        totalPrice = countOfPeople * 9.8;
      } else {
        totalPrice = countOfPeople * 10.46;
      }
      if (countOfPeople >= 30) {
        totalPrice = totalPrice - totalPrice * 0.15;
      }
      break;
    case "Business":
      if (countOfPeople >= 100) {
        countOfPeople -= 10;
      }
      if (dayOfWeek === "Friday") {
        totalPrice = countOfPeople * 10.9;
      } else if (dayOfWeek === "Saturday") {
        totalPrice = countOfPeople * 15.6;
      } else {
        totalPrice = countOfPeople * 16;
      }
      break;
    case "Regular":
      if (dayOfWeek === "Friday") {
        totalPrice = countOfPeople * 15;
      } else if (dayOfWeek === "Saturday") {
        totalPrice = countOfPeople * 20;
      } else {
        totalPrice = countOfPeople * 22.5;
      }
      if (countOfPeople >= 10 && countOfPeople <= 20) {
        totalPrice = totalPrice - totalPrice * 0.05;
      }
      break;
  }
  console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
solve(30, "Students", "Sunday");
solve(40, "Regular", "Saturday");
