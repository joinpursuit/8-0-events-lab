// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!

//query all div
document.querySelectorAll('div').forEach(div => {

  //listen for click on any div
  div.addEventListener('click', () => {
    //Check if div is palette or canvas
    //---->if palette, #current-color.style.background = div.style.background : div.style.background = #current-color.style.background
    div.className === 'cell' ? div.style.background = document.querySelector('#current-color').style.background : document.querySelector('#current-color').style.background = div.style.background

  })

})






