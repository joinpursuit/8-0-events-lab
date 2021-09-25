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
      cell.addEventListener("mouseover", (event) =>{
        event.target.style.backgroundColor = currentColors.style.backgroundColor;
    });
};

    // Added Start button that relads the page after
    const startOver = document.querySelectorAll("#start-over");

      for(let startbtn of startOver){
        startbtn.addEventListener("click", (event) =>{
          event.target.setAttribute("style", "background-color: green")
          window.location.reload();
        });
      }
