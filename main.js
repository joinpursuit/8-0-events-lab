// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

const colores = document.querySelectorAll('.color');
//got .color from css classes

const selected = document.querySelector('#current-color');
//selecting div id=current-color

for (const color of colores){
  color.addEventListener("click", () => {
    selected.style.background = color.style.background;
    //when clicked, the indicator becomes the same color as the chosen background color//
  });
}

const cells = document.querySelectorAll('.cell');
  for(const cell of cells){
    cell.addEventListener("click", () => {
      cell.style.background = selected.style.background;
      //cell color now matches the selected color.//
    });;
  }

