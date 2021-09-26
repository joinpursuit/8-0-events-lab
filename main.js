// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

// Created a variable for every color
let paletteColor = document.querySelectorAll(".color");

// Created a variable to grab the current color
let currentColor = document.querySelector("#current-color");

// Used the forEach method to add an event listener to muliple elements
paletteColor.forEach((palette) => {
  palette.addEventListener("click", () => {
    currentColor.style.background = palette.style.background;
  });
});

// Created a variable
let cellblocks = document.querySelectorAll(".cell");

// Used forEach to add an Event Listener to multiple elements
cellblocks.forEach((onecell) => {
  onecell.addEventListener("click", () => {
    onecell.style.background = currentColor.style.background;
  });
});

// We still do not understand but Stephanie GoogledFoo'd and found
// https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/
// As the main reference.

//We'll be practicing more :)
