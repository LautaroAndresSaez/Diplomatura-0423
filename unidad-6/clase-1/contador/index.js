let cuenta = 0;

function agregar() {
  cuenta++;
  const p = document.getElementById("cuenta");
  p.textContent = cuenta;
}

function restar() {
  cuenta--;
  const p = document.getElementById("cuenta");
  p.textContent = cuenta;
}
