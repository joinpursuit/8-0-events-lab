// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
	const div = document.createElement("div");
	div.classList.add("cell");
	main.append(div);
}

// You may write your code here!
const colors = document.querySelectorAll(".color");
const currentColor = document.querySelector("#current-color");
for (let color of colors) {
	color.addEventListener("click", (event) => {
		console.log(event.target.textContent);
		//set current color to color.style.backgroundcolor
		currentColor.setAttribute("style", `background-color: ${color.style.backgroundColor}`);
	});
}

//change cell on mousedown
const colorCells = document.querySelectorAll(".cell");
for (let cell of colorCells) {
	cell.addEventListener("mousedown", (event) => {
		cell.setAttribute("style", `background-color: ${currentColor.style.backgroundColor}`);
	});
}
