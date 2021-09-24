// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

document.querySelectorAll("div").forEach(div => {
 div.addEventListener("click", () =>{
  const dye = document.querySelector("#current-color")
  div.className === "cell" ? div.style.background = dye.style.background : dye.style.background = div.style.background;
 })
})

/**
 * would put
 *let palette = dye.style.background
  let divStyle = div.style.background
  div.className === "cell" ? divStyle = palette : palette = divStyle;
  But cypress does cypress things.
 */