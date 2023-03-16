function colorize() {
    let tdRows = Array.from(document.querySelectorAll('tr:nth-child(even)'));
    tdRows.forEach((row) => row.style.background = 'Teal');
}