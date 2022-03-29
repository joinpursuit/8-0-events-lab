/** @format */

// Do not change the code below.
const main = document.querySelector('main');
for (let i = 0; i < 100; i++) {
	const div = document.createElement('div');
	div.classList.add('cell');
	main.append(div);
}

// You may write your code here!
const current = document.querySelector('#current-color');

const color = document.querySelector('.color');

const cells = document.querySelectorAll('.cell');

for (let color of colors) {
	color.addEventListener('click', (event) => {
		current.style.backgroundColor = event.target.style.backgroundColor;
	});
}

for (let cell of cells) {
	cell.addEventListener('click', (event) => {
		event.target.style.backgroundColor = current.style.background;
	});

	const button = document.querySelector('button');
	button.addEventListener('click', () => {
		current.style.backgroundColor = 'white';
		cells.forEach((cell) => (cell.style.backgroundColor = '#3f427c'));
	});
}
