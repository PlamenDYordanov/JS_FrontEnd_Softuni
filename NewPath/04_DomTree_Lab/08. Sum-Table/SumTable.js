function sumTable() {
    let prices = Array.from(document.querySelectorAll('tr> td:nth-child(even)'));
    let result = document.getElementById('sum');
    let sum = 0
    for (const price of prices) {
       sum += Number(price.textContent)
    }
    result.textContent = sum;
    }