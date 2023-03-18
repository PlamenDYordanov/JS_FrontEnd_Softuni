function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    let tableSelector = Array.from(
      document.querySelectorAll("body > table > tbody > tr")
    );
    const input = document.querySelector("#searchField");
    for (const row of tableSelector) {
      if (row.textContent.includes(input.value)) {
        row.classList.add('select')
      }else {
         row.classList.remove('select');
      }
    }
  }
}
