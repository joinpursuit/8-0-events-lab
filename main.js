// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

document.querySelectorAll('div').forEach(div => {
div.addEventListener('click', () => {
const paint = document.querySelector('#current-color')
  if (div.className === 'cell'){
    div.style.background = paint.style.background
    } else {
      paint.style.background = div.style.background
    }
  })
})