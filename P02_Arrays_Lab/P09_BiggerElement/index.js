function solve(arr) {
    let maxNumber = Number.MIN_SAFE_INTEGER;
    for (let row of arr) {
        for(let element of row) {
            if (element > maxNumber) {
                maxNumber = element;
            }
        }
    }
    return maxNumber;
}
console.log(solve([[20, 50, 10],
    [8, 33, 145]]
   ));
   console.log(solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   ));