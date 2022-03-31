// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

const colors = document.querySelectorAll('.color')

const currentColor = document.querySelector('#current-color')

for (let color of colors){
  color.addEventListener('click' , () => {
    currentColor.style.backgroundColor = color.style.backgroundColor
  });
}

const divCell = document.querySelectorAll('.cell')

for (let cell of divCell) {
  cell.addEventListener('click' , () => {
    cell.style.backgroundColor = currentColor.style.backgroundColor
  });
}

const button = document.createElement('button');
button.setAttribute("style", "padding: 15px; width: 70px; height: 10px; margin: 25px")
button.textContent = "RESET";



const section = document.querySelectorAll('section')
section[section.length-1].after(button)

button.addEventListener('click' , () => {
  divCell.forEach(x => x.style.backgroundColor = 'white')
})
