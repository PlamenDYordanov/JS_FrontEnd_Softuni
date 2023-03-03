function solve(password) {
  let isValid = true;
  let length = password.length;
  if (password.length < 6 || password.length > 10) {
      isValid = false;
      console.log(`Password must be between 6 and 10 characters`);
}
  if (!password.match(/^[A-Za-z0-9]*$/)) {
    console.log(`Password must consist only of letters and digits`);
    isValid = false;
  }
  if (!password.match(/[0-9]{2}/)) {
    console.log(`Password must have at least 2 digits`);
    isValid = false;
  }
  if (isValid) {
    console.log(`Password is valid`);
  }
}
solve("logIn");
solve("MyPass123");
solve("Pa$s$s");
