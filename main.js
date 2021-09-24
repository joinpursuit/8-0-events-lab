// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

//listen for click on color palette and change #current-color

let brush = document.querySelector('#palette div').style.background

document.querySelectorAll("#palette div").forEach( currentColor => {
  currentColor.addEventListener('click', paletteColor =>{
    
    document.querySelector("#current-color").style.background = paletteColor.target.style.background;

    brush = paletteColor.target.style.background
  })  
});



document.querySelectorAll('div.cell').forEach( cell => {
  cell.addEventListener('click', () => {
    cell.style.background = brush
    
  })
})

