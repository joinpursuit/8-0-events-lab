// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here
const myPallete = document.querySelectorAll('.color');
myPallete.forEach(color => {
  color.addEventListener('click', () => {
    const activeColor = color.getAttribute('style');
    const current = document.querySelector("#current-color");
    current.setAttribute('style', activeColor);
    const myCell = document.querySelectorAll('.cell');
    myCell.forEach(cell => {
      cell.addEventListener('click', () => {
        cell.setAttribute('style', activeColor);
      });
    });
  }
  );
});
