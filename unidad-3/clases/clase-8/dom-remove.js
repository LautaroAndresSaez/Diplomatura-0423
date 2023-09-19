const state = {
  nodes: [],
};

function agregar() {
  const ul = document.getElementById("numeros");
  const nodo = document.createElement("li");
  nodo.textContent = state.nodes.length + 1;
  ul.appendChild(nodo);
  state.nodes.push(nodo);
}

function eliminar() {
  const ul = document.getElementById("numeros");
  //const nodo = document.getElementById(numero);
  const nodo = state.nodes[state.nodes.length - 1];
  ul.removeChild(nodo);
  state.nodes.pop();
}

function eliminarPro() {
  const ul = document.getElementById("numeros");
  const ultimoNodo = ul.lastChild;
  ul.removeChild(ultimoNodo);
}
