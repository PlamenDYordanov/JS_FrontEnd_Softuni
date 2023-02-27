function solve(amountOfGold) {
  let oneGramGold = 67.51;
  let oneBitcoin = 11949.16;
  let totalBitcoin = 0;
  let gainedMoney = 0;
  let firstDayToBuyBitcoin = 0;
  let isFirstTime = false;
  for (let i = 1; i <= amountOfGold.length; i++) {
    let goldPerDay = amountOfGold[i - 1];
    if (i % 3 === 0) {
      goldPerDay = amountOfGold[i - 1] * 0.7;
      gainedMoney += goldPerDay * oneGramGold;
    } else {
      gainedMoney += goldPerDay * oneGramGold;
    }
    if (gainedMoney >= oneBitcoin) {
      if (!isFirstTime) {
        firstDayToBuyBitcoin = i;
        isFirstTime = true;
      }
      while (gainedMoney >= oneBitcoin) {
        gainedMoney -= oneBitcoin;
        totalBitcoin++;
      }
    }
  }
  console.log(`Bought bitcoins: ${totalBitcoin}`);
  if (totalBitcoin > 0) {
    console.log(`Day of the first purchased bitcoin: ${firstDayToBuyBitcoin}`);
  }
  console.log(`Left money: ${gainedMoney.toFixed(2)} lv.`);
}
solve([3124.15, 504.212, 2511.124]);
solve([100, 200, 300]);
