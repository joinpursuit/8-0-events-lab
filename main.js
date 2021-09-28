// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
//creating event listener to change color palette
const palette = document.querySelectorAll("#palette");

palette.forEach((eachColor) => {
  eachColor.addEventListener('click', (event) => {
    document.querySelector('#current-color').style.background = event.target.style.background
  })
})

//creating event listener to change pixel of canvas
const canvas = document.querySelector("#canvas");
canvas.addEventListener("click", (event) => {
  event.target.style.background = document.querySelector("#current-color").style.background;
});

let mouseDown = false;

document.querySelectorAll(".cell").forEach((el) => {
  el.addEventListener("dragover", (event) => {
    event.target.style.background = document.querySelector("#current-color").style.background;
  });
});


