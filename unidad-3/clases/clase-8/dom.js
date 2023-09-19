console.log("Dom file");

console.log("nodo raíz: ", nodo);

function agregarNodo() {
  const nodoRaiz = document.getElementById("root");

  const nodo = document.createElement("p"); //<p></p>
  nodo.textContent = "Texto desde JS"; // <p>Texto desde JS</p>
  nodoRaiz.appendChild(nodo);
  /*
    <div id="root">
        <h2>Titulo</h2>
        <p>Hola</p>
        <p>Texto desde JS</p>
    </div>
  */
}
