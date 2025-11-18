const container = document.getElementById("container");

for (let i = 0; i < 16 * 16; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.addEventListener('mouseenter', function() {
    cell.classList.add('highlight');
  } );
  container.appendChild(cell);
}

 const myButton = document.getElementById('button');
    
    myButton.addEventListener('click', () => {
       let size = prompt("Enter number of squares per side (max 100):");
       while (isNaN(size) || size < 1 || size > 100) {
      size = Number(prompt("Please enter a valid number between 1 and 100:"));
}
container.innerHTML = "";
   
  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("newCell");
    cell.style.width = `calc(100% / ${size})`;
    cell.addEventListener('mouseenter', function() {
      cell.style.backgroundColor = 'dodgerblue';
    });
    container.appendChild(cell);
  }

console.log(size);     
    });
