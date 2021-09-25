// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}
// You may write your code here!
let firstSection = document.querySelector("#current-color");
let allDiv = document.querySelectorAll("#palette div")
let cole = document.querySelectorAll("#canvas .cell");

// changing the current color;
for (let eachDiv of allDiv){
  eachDiv.addEventListener("click", (e) => {
   firstSection.style.backgroundColor = eachDiv.style.backgroundColor;
  })
}
// it needs to change the color when it is picked ..
for(let ceo of cole ){
  ceo.addEventListener("click", () => {
    ceo.style.backgroundColor = firstSection.style.backgroundColor;
  })
}
