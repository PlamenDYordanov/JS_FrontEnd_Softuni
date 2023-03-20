function editElement(...elements) {
  let heading = elements[0];
    while(heading.textContent.includes(elements[1])){
        heading.textContent = heading.textContent.replace(elements[1], elements[2]);
    }
}