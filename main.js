// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

const currentColor = document.querySelector("#current-color");
const colors = document.querySelectorAll("div.color");

// > for of loop
// for (const color of colors) {
//   color.addEventListener("click", () => {
//     currentColor.style.background = color.style.background
//   });
// };

colors.forEach((color) => {
  color.addEventListener("click", () => {
    currentColor.style.background = color.style.background
  });
});


