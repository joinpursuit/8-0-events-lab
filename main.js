// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}
// You may write your code here!
const currentColor = document.querySelector("#current-color");

const palette = document.querySelectorAll(".color");

palette.forEach(color => {
  color.addEventListener("click", (event) => {
   
  currentColor.setAttribute("style", `background: ${color.style.background}`);
  })
})

const cell = document.querySelectorAll(".cell");

cell.forEach(cell => {
  cell.addEventListener("click", (event) => {
    cell.setAttribute("style", `background: ${currentColor.style.background}`)

  })

})