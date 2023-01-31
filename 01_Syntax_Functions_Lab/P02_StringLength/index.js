function printSum(firstInput, secondInput, thirdInput) {
    let totalSum = firstInput.length + secondInput.length + thirdInput.length;
    let averrage = Math.floor(totalSum/3);
    console.log(totalSum);
    console.log(averrage);
}
printSum('chocolate', 'ice cream', 'cake');
printSum('pasta', '5', '22.3')