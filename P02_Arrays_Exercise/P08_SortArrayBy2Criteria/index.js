function solve(arr) {
  arr.sort((a, b) => {
    if (a.length > b.length) {
      return 1;
    }
    if (a.length < b.length) {
      return -1;
    }
    if(a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }

  });
  console.log(arr.join("\n"));
}
solve(["alpha", "beta", "gamma"]);
solve(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
solve(["test", "Deny", "omen", "Default"]);
