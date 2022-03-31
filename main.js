// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
const colors = document.querySelectorAll(".color");
colors.forEach(color => {
  color.addEventListener("click" , (e) => {
const currentColor = document.querySelector("#current-color");
const backgroundColor = color.style.background;
currentColor.setAttribute("style", `background: ${backgroundColor}`)
  })
});

const cells = document.querySelectorAll(".cell");
cells.forEach(cell =>  {
  cell.addEventListener("click" , (e) => {
    const currentColor2 = document.querySelector ("#current-color");
    const backgroundColor2 = currentColor2.style.background;
    cell.setAttribute("style", `background: ${backgroundColor2}`)
  })
});