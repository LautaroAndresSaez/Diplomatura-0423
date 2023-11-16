console.log("hi");

let contador = 0;

const add = (ev) => {
  contador++;
  const p = document.getElementById("contador");
  p.textContent = contador;
  if (contador === 10) {
    //ev.target.removeEventListener("click", add);
    document.getElementById("add").removeEventListener("click", add);
  }
};

document.getElementById("add").addEventListener("click", add);
