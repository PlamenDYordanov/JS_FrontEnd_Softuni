function aggregate(inputArr = []) {
    // let sum = inputArr.reduce((x, y) => x + y, 0);
    // let joined = inputArr.join("");
    // let inverse = inputArr.reduce((x, y) => x + 1 / y, 0)

    // console.log(sum);
    // console.log(inverse);
    // console.log(joined);
    let totalSum = 0;
    for(let i = 0; i < inputArr.length; i++) {
        totalSum += inputArr[i];
    }
    console.log(totalSum);
    let inverseSum = 0;
    for(let i = 0; i < inputArr.length; i++) {
        inverseSum +=  (1 / inputArr[i]);
    }
    console.log(inverseSum);
    let concatString = "";
    for(let i = 0; i < inputArr.length; i++) {
        concatString += String(inputArr[i]);
    }
    console.log(concatString);
}
aggregate([1,2,3]);
aggregate([2,4,8,16]);