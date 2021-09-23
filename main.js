// Do not change the code below.
const main = document.querySelector('main');
for (let i = 0; i < 100; i++) {
  const div = document.createElement('div');
  div.classList.add('cell');
  main.append(div);
}

// You may write your code here!
for (let i = 0; i < 300; i++) {
  const div = document.createElement('div');
  div.classList.add('cell');
  main.append(div);
}
let cColor = 'white';
document.querySelectorAll('div').forEach((e) =>
  e.addEventListener('click', (event) => {
    if (event.target.className === 'color') {
      cColor = event.target.style.background;
      document.querySelector('#current-color').style.background = cColor;
    } else {
      e.setAttribute('style', `background-color: ${cColor}`);
    }
  })
);
