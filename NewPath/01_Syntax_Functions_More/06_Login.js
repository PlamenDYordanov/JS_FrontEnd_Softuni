function solve(...input) {
  let userName = input[0][0];
  let password = "";
  for (let i = userName.length - 1; i >= 0; i--) {
    password = password + userName[i];
  }
  for (let i = 1; i < 4; i++) {
    if (input[0][i] === password) {
      console.log(`User ${userName} logged in.`);
      return;
    } else {
      console.log(`Incorrect password. Try again.`);
    }
  }
  if (input[0][4] === password) {
    console.log(`User ${userName} logged in.`);
    return;
  }
  console.log(`User ${userName} blocked!`);
}
solve(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
solve(["Acer", "login", "go", "let me in", "recA"]);
solve(["momo", "omom"]);
solve(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
