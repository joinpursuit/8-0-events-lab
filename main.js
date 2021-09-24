// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

// const currentColor = document.querySelector("#current-color");
// const palettes = document.querySelectorAll("#palette .color");
// for(let palette of palettes){

// }

document.querySelectorAll("div").forEach((div) => {
  div.addEventListener("click", () => {
    const dye = document.querySelector("#current-color");
    div.className == "cell"
    ? (div.style.background = dye.style.background)
    : (dye.style.background = div.style.background);
  });
});