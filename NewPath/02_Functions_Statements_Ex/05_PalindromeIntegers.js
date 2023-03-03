function solve(arr) {
    for (const currentNumber of arr) {
        let isPalindrome = false;
        let currentNumToString = String(currentNumber);
        for (let i = 0; i < currentNumToString.length / 2; i++) {
            if(currentNumToString[i] === currentNumToString[currentNumToString.length - 1 -i]) {
                isPalindrome = true;
            }else {
                isPalindrome = false;
                break;
            }
        }
        console.log(isPalindrome);
        
    }
}
solve([123, 323, 421, 121]);
solve([32, 2, 232, 1010]);
