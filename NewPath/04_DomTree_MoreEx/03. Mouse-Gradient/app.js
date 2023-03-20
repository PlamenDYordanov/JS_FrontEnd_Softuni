function attachGradientEvents() {
  let gradient = document.getElementById("gradient");
  let result = document.getElementById("result");
  gradient.addEventListener("mousemove", calculateProgress);

  function calculateProgress(e) {
    //cuz div is 300px -> look at css file
    const value = 300;
    let currentCoordinates = e.offsetX;
    result.textContent = `${Math.floor((currentCoordinates / value) * 100)}%`;
  }
}
