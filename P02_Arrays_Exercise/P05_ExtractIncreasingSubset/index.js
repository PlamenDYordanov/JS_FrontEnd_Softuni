function solve(arr) {
    let res = [];
    let biggestNum = arr[0];
    res = arr.reduce((acc, currEl) => {
        if(biggestNum <= currEl) {
            acc.push(currEl);
            biggestNum = currEl;
        }
        return acc;
    }, []);
    return res;
}
solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
solve([1, 2, 3, 4]);
solve([20, 3, 2, 15, 6, 1]);
