// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

document.querySelector("#palette").after(document.createElement("button"));
buttonEl = document.querySelector("button");
// You may write your code here!
//creating event listener to change color palette
const palette = document.querySelector("#palette");
palette.addEventListener("click", (event) => {
  switch (event.target.style.background) {
    case "black":
      document.querySelector("#current-color").style.background = "black";
      break;
    case "red":
      document.querySelector("#current-color").style.background = "red";
      break;
    case "orange":
      document.querySelector("#current-color").style.background = "orange";
      break;
    case "yellow":
      document.querySelector("#current-color").style.background = "yellow";
      break;
    case "green":
      document.querySelector("#current-color").style.background = "green";
      break;
    case "blue":
      document.querySelector("#current-color").style.background = "blue";
      break;
    case "purple":
      document.querySelector("#current-color").style.background = "purple";
      break;
    case "white":
      document.querySelector("#current-color").style.background = "white";
      break;
  }
});

document.querySelectorAll(".cell").forEach((el) => {
  el.addEventListener("click", (event) => {
    event.target.style.background = document.querySelector("#current-color").style.background;
  });
});

buttonEl.addEventListener("click", () => {
  const currentColor = document.querySelector("#current-color").style.background;
  //iterate through cells to change color
  document.querySelectorAll(".cell").forEach((el) => {
    el.style.background = currentColor;
  });
});
