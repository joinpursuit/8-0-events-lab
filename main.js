// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

    const currentColors = document.querySelector("#current-color");
    const initColors = document.querySelectorAll(".color");
    const cells = document.querySelectorAll(".cell");

    for(let colors of initColors){
      colors.addEventListener("click", (event) =>{
        currentColors.style.backgroundColor = event.target.style.backgroundColor;
    });
};

    for(let cell of cells){
      cell.addEventListener("click", (event) =>{
        event.target.style.backgroundColor = currentColors.style.backgroundColor;
    });
};