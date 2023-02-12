function solve(arr) {
  let ticTac = [
    ["false", "false", "false"],
    ["false", "false", "false"],
    ["false", "false", "false"],
  ];
  let isWin = false;
  let freeSpace = 9;
  let currentPlayer = "X";
  for (let move = 0; move < arr.length; move++) {
 
    let splitInput = arr[move].split(" ").map((element) => Number(element));
    let currentRow = splitInput[0];
    let currentCol = splitInput[1];
    if (
      ticTac[currentRow][currentCol] === "X" ||
      ticTac[currentRow][currentCol] === "O"
    ) {
      console.log("This place is already taken. Please choose another!");
      continue;
    } else {
      ticTac[currentRow][currentCol] = currentPlayer;
      freeSpace --;
    }
    // TO - DO
    // check if palyer win the game after fifth move
    if (move >= 4) {
      let win = 0;
      // PrimaryDiagonal
        for (let i = 0; i < 3; i++) {
          if (ticTac[i][i] === currentPlayer) {
            win++;
          } else {
            win = 0;
            break;
          }
          if (win === 3) {
            isWin = true;
            break;
          }
        }
        //SecondaryDiagonal
        (currentRow == 0 && currentCol == 2) ||
        (currentRow == 1 && currentCol == 1) ||
        (currentRow == 2 && currentCol == 0)
        for (let i = 0; i < 3; i++) {
          if (ticTac[i][ticTac.length - 1 - i] === currentPlayer) {
            win++;
          } else {
            win = 0;
            break;
          }
          if (win === 3) {
            isWin = true;
            break;
          }
        }
      //everyRow
      for (let row = 0; row < ticTac.length; row++) {
        for (let col = 0; col < ticTac[row].length; col++) {
          if (ticTac[row][col] === currentPlayer) {
            win++;
          } else {
            win = 0;
            break;
          }
          if (win === 3) {
            isWin = true;
            break;
          }
        }
      }
      //everyCol
      for (let col = 0; col < ticTac.length; col++) {
        for (let row = 0; row < ticTac[col].length; row++) {
          if (ticTac[row][col] == currentPlayer) {
            win++;
          } else {
            win = 0;
            break;
          }
          if (win === 3) {
            isWin = true;
            break;
          }
        }
      }
    }
    if (isWin == true) {
      console.log(`Player ${currentPlayer} wins!`);
      break;
    }
    if(freeSpace == 0) {
        break;
    }
    if (currentPlayer == "X") {
      currentPlayer = "O";
    } else {
      currentPlayer = "X";
    }
 
  }
  if (isWin == false) {
    console.log(`The game ended! Nobody wins :(`);
  }
  ticTac.forEach((el) => console.log(el.join('\t')));

}
solve(["0 1", "0 0", "1 1", "1 0", "2 1", "1 1", "1 2", "2 2", "2 1", "0 0"]);

solve(["0 0", "1 1", "1 0", "0 2", "2 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);

solve(["0 1", "0 0", "0 2", "2 0", "1 0", "1 1", "1 2", "2 2", "2 1", "0 0"]);

solve(["0 0", "0 0", "1 1", "0 1", "1 2", "0 2", "2 2", "1 2", "2 2", "2 1"]);

solve(["0 1", "0 0", "0 2", "2 0", "1 0", "1 2", "1 1", "2 1", "2 2", "0 0"]);
