function search() {
  let searchInput = document.querySelector("#searchText").value;
  console.log(searchInput);
  const towns = Array.from(document.querySelector("#towns").children);
  let output = document.querySelector("#result");
  let index = -1;
  let coincidence = 0;
  for (let currentTown of towns) {
     index++;
     towns[index].style.textDecoration = "none";
     towns[index].style.fontWeight = "500";
    currentTown = currentTown.textContent;
    console.log(currentTown);
    if(currentTown.includes(searchInput)){
      coincidence++;
      towns[index].style.textDecoration = "underline";
      towns[index].style.fontWeight = "bold";
    }
    
  }
  output.innerHTML = `${coincidence} matches found`
}
