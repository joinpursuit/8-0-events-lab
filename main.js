// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
const chosenColor = document.querySelector("#current-color");
const colors = document.querySelectorAll(".colors");

document.addEventListener("click",({target}) => {
  console.log(target); //Making sure the right thing is being accessed
  if (target.className == "color") {
    chosenColor.setAttribute("style", `background:${target.style.background}`);
  }
  if (target.className == "cell") {
    target.setAttribute("style", `background:${chosenColor.style.background}`);
  }
});