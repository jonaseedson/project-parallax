let text = document.getElementById("text");
let predios1 = document.getElementById("predios1");
let predios2 = document.getElementById("predios2");
let predios3 = document.getElementById("predios3");
let nuvens = document.getElementById("nuvens");
let nave = document.getElementById("nave");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  text.style.marginTop = value * 2.5 + "px";
  nave.style.left = value * 1.5 + "px";
  predios3.style.top = value * 0.5 + "px";
  predios2.style.top = value * 0.3 + "px";
  prediosper1.style.left = value * 0.1 + "px";
  prediosper1.style.top = value * -0.10 + "px";
  prediosper2.style.left = value * -0.1 + "px";
  prediosper2.style.top = value * -0.10 + "px";
});
