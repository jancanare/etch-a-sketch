const container = document.getElementById("container");

for (let i = 0; i < 16 * 16; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.addEventListener('mouseenter', function() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16).padStart(6, "0");
      cell.style.backgroundColor = "#" + randomColor;
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

      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      cell.dataset.baseColor = `${r},${g},${b}`;
      cell.dataset.opacity = 0;
     
   cell.addEventListener("mouseenter", function() {
    // Increase opacity by 0.1, max 1
    let currentOpacity = parseFloat(cell.dataset.opacity);
    if (currentOpacity < 1) {
      currentOpacity += 0.1;
      cell.dataset.opacity = currentOpacity;
    }

    // Apply black with the current opacity
     const [r, g, b] = cell.dataset.baseColor.split(",");
  cell.style.backgroundColor = `rgba(${r},${g},${b},${currentOpacity})`;
  });

  container.appendChild(cell);
}

console.log(size);     
    });
