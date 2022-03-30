// Do not change the code below.
const main = document.querySelector('main');
for (let i = 0; i < 100; i++) {
  const div = document.createElement('div');
  div.classList.add('cell');
  main.append(div);
}

// You may write your code here!
const currentColor = document.getElementById('current-color');
const palette = document.getElementsByClassName('color');
const canvas = document.getElementsByClassName('cell');

for (let color of palette) {
  color.addEventListener('click', () => {
    currentColor.setAttribute('style', color.getAttribute('style'));
  });
}
// loops through 
for (let cell of canvas) {
  cell.addEventListener('click', () => {
    cell.setAttribute('style', currentColor.getAttribute('style'));
    const reset = document.querySelector('button');
    reset.addEventListener('click', () => {
      cell.setAttribute('style', '');
    });
  });
}

/** 
Additional Features
Attempt to implement at least one of the following features:

[ ] Increase the number of cells without increasing the width or height of the #canvas element.
[ ] Change the event listener so that instead of clicking to fill a color, you hold down your mouse.
[ ] Create a button that, when clicked, resets all cells so that they all have a background of white.
[ ] Create a button that, when clicked, changes all of the cells so that they match the #current-color element's background.
Feel free to add other fun features to build out your pixel painter!
 */
