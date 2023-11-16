console.log("Hola Clase!");



function nuevoTitulo() {
  const boton = document.getElementById("mi-id");
  console.log(".getElementById", document.getElementById("mi-id"));
  console.log(".querySelector", document.querySelectorAll("*"));
  crearLista();
}

function agregarElemento() {
  const root = document.getElementById("root");

  const p = document.createElement("p");
  p.textContent = "Hola clase!";

  root.appendChild(p); //es como array.push(elemento)
}

function eliminarElemento() {
  const root = document.getElementById("root");
  if (root?.lastChild) {
    root.removeChild(root.lastChild);
  }
}
