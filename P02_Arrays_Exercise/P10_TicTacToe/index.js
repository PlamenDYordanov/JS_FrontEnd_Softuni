function solve(arr) {
let ticTac = [
['false', 'false', 'false'],
['false', 'false', 'false'],
['false', 'false', 'false']];
let currentPlayer = 'X';
for(let move = 0; move < 10; move ++) {
   let splitInput = arr[move].split(' ').map(element => Number(element));
   let currentRow = splitInput[0];
   let currentCol = splitInput[1];

   if(arr[currentRow][currentCol] === 'X' || arr[currentRow][currentCol] === 'O') {
        console.log("This place is already taken. Please choose another!")
        continue;
   }else {
    ticTac[currentRow][currentCol] = currentPlayer;
   }
   // TO - DO
   // check if palyer win the game after sixth move

   if (currentPlayer == 'X'){
    currentPlayer = 'O';
   }else {
    currentPlayer = 'X';
   }
}
}
solve(["0 1",
"0 0",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]
);

solve(["0 0",
"0 0",
"1 1",
"0 1",
"1 2",
"0 2",
"2 2",
"1 2",
"2 2",
"2 1"]
);

solve(["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 2",
"1 1",
"2 1",
"2 2",
"0 0"]
);