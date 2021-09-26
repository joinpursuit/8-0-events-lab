// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}
// You may write your code here!


// Selecting a DOM element having the class current-color
let currentColor = document.querySelector('#current-color');

// Setting default  value to currentColor
currentColor.style.backgroundColor = 'black';

// Selecting a list of DOM elements (HTMLCollection) from div tags having palette class
const paletteColorSection = document.querySelectorAll('#palette div');
paletteColorSection.forEach((palet) => {

  //Calling event listener on each DOM element
  palet.addEventListener('click', (event) => {
    currentColor.style.backgroundColor = event.target.style.backgroundColor;
  });
});

// Selecting a list of DOM elements (HTMLCollection) from main tags  having cell class
const mainCells = document.querySelectorAll('main .cell');
mainCells.forEach((cell) => {
  //Calling event listener on each DOM element
  cell.addEventListener('mousedown', (event) => {
    
    //console.log(event.target)    
    event.target.style.backgroundColor = currentColor.style.backgroundColor;
  });

});

 
//Additional settings
const divButton = document.createElement('div');
divButton.classList.add('allBtn');

//Styling Div containing buttons 
 divButton.setAttribute("style","width:150px; display:grid; float:right; gap:5px; margin: 18px 18px; align-items: center; border: 2px solid #393e41; padding-:5px 5px;border: 10px;;");

for (let i =0; i < 2; i++){
  const button = document.createElement('button');
  divButton.appendChild(button);
}


//Reset-button class & textNode  assignment
divButton.firstElementChild.classList.add('btn');
const firstChild = divButton.firstElementChild;
firstChild.textContent = 'Reset All';
firstChild.setAttribute("style","height:30px; background-color: #f44336;font-size: 18px; border: 3px solid #BADA55; border-radius: 5px 20px 5px")


//Color-matching class & textNode  assignment
divButton.lastElementChild.classList.add('btn-current');
const secondChild = divButton.lastElementChild;
secondChild.textContent = 'Color Match';
secondChild.setAttribute("style","font-size:15px;font-family: Gill Sans Extrabold, sans-serif; height:30px; background-color: #4bf0ab; border: 3px solid #BADA55; border-radius: 5px 10px 15px 20px")

//Assign the div container to the DOM element 
main.after(divButton);


const btnReset = document.querySelector('.btn')
const resetButton = () => {
  for ( let i = 0; i < mainCells.length; i++){
    const cell = mainCells[i];
    cell.style.backgroundColor = '#ffffff';
  }


  const eachCell = (cell) => cell.style.backgroundColor = '#ffffff';
  mainCells.forEach(eachCell)

}

btnReset.addEventListener('click', resetButton)


// Create a button that, when clicked, changes all of the cells 
const btnColorMatch = document.querySelector('.btn-current')
const colorMatch = () => {

  // reseting all cells bgC to white
  const eachCell = (cell) => cell.style.backgroundColor = currentColor.style.backgroundColor;
  mainCells.forEach(eachCell)
}

btnColorMatch.addEventListener('click', colorMatch)


