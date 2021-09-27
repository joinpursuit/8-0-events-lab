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
      cell.addEventListener("mousedown", (event) =>{
        event.target.style.backgroundColor = currentColors.style.backgroundColor;
    });
};

    // Added Start button that relads the page after
    const startOver = document.querySelectorAll(".glow-on-hover");

      for(let startbtn of startOver){
        startbtn.addEventListener("mousedown", (event) =>{
         window.location.reload();
        });
      }
 
      //Header Animation

    const spans = document.querySelectorAll('.word span');
      spans.forEach((span, idx) => {
        span.addEventListener('click', (e) => {
        e.target.classList.add('active');
        });
          span.addEventListener('animationend', (e) => {
          e.target.classList.remove('active');
    });
  
  // Initial animation
  setTimeout(() => {
    span.classList.add('active');
  }, 750 * (idx+1))
});