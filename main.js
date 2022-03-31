// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
// const colors = document.querySelectorAll('.color')
// colors.forEach(color => {
//   color.addEventListener('click', (event) => {
//     const currentColor = document.querySelector('#current-color')
//     currentColor.style.backgroundColor = color.style.backgroundColor
//   })
// })

// const cell = document.querySelectorAll(".cell").forEach((cell) => {
//   cell.addEventListener("click", () => { 
//     const currentColor = document.querySelector("#current-color");
//     cell.style.backgroundColor += currentColor.style.backgroundColor;
//   });
// }); <----ORIGNAL CODE 
//CLEAN CODE-------->
const currentColor = document.querySelector("#current-color");

document.querySelectorAll(".color").forEach((color) => {
  color.addEventListener("click", () => {
    currentColor.style.background = color.style.background;
  });
});

document.querySelectorAll(".cell").forEach((cell) => {
  cell.addEventListener("click", () => {
    cell.style.background = currentColor.style.background;
  });
});