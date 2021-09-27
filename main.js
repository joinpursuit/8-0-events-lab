const background = document.querySelector("#canvas");
for (let i = 0; i < 2500; i++) {
  const dots = document.createElement("span");
  dots.classList.add("dots");
 background.append(dots);
}



// ************************** querying essential elements

const paletteColor = document.querySelectorAll("#palette .color");
let currentColor = document.querySelector("#current-color");
// let temp;


const dots = document.querySelectorAll(".dots");

const afterDots = document.createElement("div")
afterDots.classList.add('afterDots');


// Paint the dots **************************


dots.forEach((dot) => { 
      dot.addEventListener("click", () => { 
      dot.style.background = currentColor.style.background;
      dot.style.opacity = "0.5";
      dot.style.boxShadow = document.querySelector('.test-neon').style.boxShadow;
      dot.style.animation = "flicker 2s linear infinite";
    })
})

// Pick a color from the color palette **************************
const pickedColor = document.querySelector('#pen-color');

pickedColor.addEventListener('mouseover', () => {
    currentColor.style.background = pickedColor.value;
})

pickedColor.addEventListener("change", () => {
  currentColor.style.animation = "flickerTwo 2s linear infinite";
})


// Fill the canvas up with the selected color**************************

pickedColor.addEventListener('dblclick', () => {
  dots.forEach((dot) => dot.style.background = pickedColor.value);
})


// **************************delete dot **************************
dots.forEach((dot) => {
    dot.addEventListener("dblclick", () => { 
      dot.style.background = "transparent";
      dot.style.boxShadow = "none";
      dot.style.animation = "none";
      dot.style.opacity = "0.5";
    })
  })

// **************************reset the canvas**************************
currentColor.addEventListener('dblclick', () => {
    dots.forEach((dot) => {
    dot.style.background = "transparent";
    dot.style.boxShadow = "none";
    dot.style.animation = "none";
    dot.style.opacity = "0.5";
  })
})



// **** play around **************************

const saveButton = document.querySelector("#save");

function saveIt (){
  window.print()
}

saveButton.addEventListener("click", saveIt)


//******************************* Text Animation ***************
document.querySelector("h1").innerHTML =
document.querySelector("h1").textContent.replace(/./g, "<span>$&</span>");

let spans = document.querySelectorAll("h1 span");
for (let i=0; i<spans.length; i++) {
  let left = innerWidth * Math.random();
  let top = innerHeight * Math.random();
  if (Math.random() < 0.5) {
    spans[i].style.left = "-" + left + "px";
  } else {
  } spans[i].style.left = left + "px";

  if (Math.random() < 0.5) {
    spans[i].style.top = "-" + top + "px";
  } else {
  } spans[i].style.top = top + "px";
  }





