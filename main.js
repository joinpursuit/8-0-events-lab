// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

const selectPalette = document.querySelector('#palette div').style.background
document.querySelectorAll("#palette div").forEach(div => {
  div.addEventListener('click', selectColor => {
    document.querySelector('#current-color').style.background = selectColor.target.style.background;
  })
});

document.querySelectorAll('.cell').forEach(cell => {
  cell.addEventListener('click', selectedCell => {
    selectedCell.target.style.background = document.querySelector('#current-color').style.background;
  })
});