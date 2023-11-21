console.log("Hola tripulante!");

const DELTA = 250;
const DELTA_SCALE = 0.9;
const BACKGROUND_COLOR = "rgb(66, 10, 141)";
const state = {
  left: 0,
  scale: 1,
};

let backgroundColor = "black";

const updateAstronauta = () => {
  const astronauta = document.getElementById("astronauta");
  astronauta.style.left = state.left + "px";
  astronauta.style.scale = state.scale;
};

window.addEventListener("keydown", (e) => {
  if (e.code !== "Space") return;
  state.left += DELTA;
  state.scale *= DELTA_SCALE;
  if (state.scale < 0.3) {
    state.scale = 1;
  }
  updateAstronauta();
});

document.getElementById("move").addEventListener("click", (e) => {
  state.left = 0;
  state.top = 0;
  state.scale = 1;
  updateAstronauta();
});

document.getElementById("float").addEventListener("click", () => {
  const astronauta = document.getElementById("astronauta");
  if (astronauta.style.top) {
    astronauta.style.top = "";
    astronauta.style.bottom = "5px";
    return;
  }
  astronauta.style.top = "5px";
  astronauta.style.bottom = "";
});

document.getElementById("color").addEventListener("click", () => {
  const espacio = document.getElementById("espacio");
  if (backgroundColor === "black") {
    espacio.style.backgroundColor = BACKGROUND_COLOR;
    backgroundColor = BACKGROUND_COLOR;
  } else {
    espacio.style.backgroundColor = "black";
    backgroundColor = "black";
  }
});
