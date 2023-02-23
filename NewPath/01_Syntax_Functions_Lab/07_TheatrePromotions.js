function solve(typeOfTicket, age) {
    let result = "";
  if (age < 0 || age > 122) {
    console.log("Error!")
    return;
  } else {
    switch (typeOfTicket) {
      case "Weekday":
        if(age >= 0 && age <= 18) {
                result = "12$";
        }else if (age <= 64) {
            result = "18$";
        }else {
            result = "12$"
        }
        break;
      case "Weekend":
        if(age >= 0 && age <= 18) {
            result = "15$";
    }else if (age <= 64) {
        result = "20$";
    }else {
        result = "15$"
    }
        break;
      case "Holiday":
        if(age >= 0 && age <= 18) {
            result = "5$";
    }else if (age <= 64) {
        result = "12$";
    }else {
        result = "10$"
    }
        break;
        default:
            result = "Error!"
    }
  }
  console.log (result);
}
solve("Weekday", 42);
solve("Holiday", -12);
solve("Holiday", 15);
