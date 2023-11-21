//mover al astronauta a la derecha y que se vaya achicando
function moverAstronauta() {
  let astronauta = document.getElementById("astronauta");
  let currentPosition = astronauta.offsetLeft;
  astronauta.style.left = currentPosition + 100 + "px";
  astronauta.style.scale -= 0.025;
}

document.addEventListener("keydown", function (ev) {
  if (ev.code === "Space") {
    moverAstronauta();
  }
});
