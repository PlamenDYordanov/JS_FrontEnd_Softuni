function solve(...rectangle) {
  let rect = {
    width: rectangle[0],
    height: rectangle[1],
    color: rectangle[2],
    calcArea() {
      return rect.height * rect.width;
    }
  };
  console.log(rect.width);
  console.log(rect.height);
  console.log(rect.color);
  console.log(rect.calcArea());
}
solve(4, 5, "red");
