// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
document.addEventListener("click", ({target}) => {
  console.log(target);
  if (target.className === 'color'){
    document.getElementById("current-color").style.background = target.style.background
  } else if (target.className === 'cell'){
    console.log("it worked!")
    target.style.background = document.getElementById('current-color').style.background;
  } else if (target.id === 'theButton'){
    const cells = document.getElementsByClassName('cell');
    for (cell of cells) {
      cell.style.background = 'white';
    }
    document.getElementById("current-color").style.background = "white"
  }
});
