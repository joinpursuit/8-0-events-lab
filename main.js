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
   eachDiv.classList.add("animated");
   e.stopPropagation();
  })
}
// it needs to change the color when it is picked ..
for(let ceo of cole ){
  ceo.addEventListener("click", (e) => {
    ceo.style.backgroundColor = firstSection.style.backgroundColor;
    e.stopPropagation();
  })
}

// - [ ] Create a button 
let reset = document.querySelector("button");
reset.addEventListener("click", () => {
  window.location.reload();
  return false;
})

// creating a animation text for "Logo"
let logo = document.querySelector("h1");
let logoText = logo.textContent;
let logoSplit = logoText.split("");
logo.textContent = "";

for (let i = 0; i < logoSplit.length; i++){
  logo.innerHTML += "<span>" + logoSplit[i] + "</span>";
}
let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
  let span = logo.querySelectorAll("span")[char];
  span.classList.add("animated");
  char++
  if(char === logoSplit.length){
    complete();
    return;
  }
}
function complete(){
  clearInterval(timer);
  timer = null;
}

// when the body is clicked i want to change the current color to default aka - White

let body = document.querySelector("body");
body.addEventListener("click", (e) => {
  firstSection.style.backgroundColor = "white";
})
