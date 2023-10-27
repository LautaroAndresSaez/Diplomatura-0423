console.log("Hola desde el front!!!");

fetch("http://localhost:3000/tareas")
  .then((resultado) => resultado.json())
  .then((json) => console.log(json))
  .catch((error) => console.log("Algo salio mal"));

function saludar() {
  alert("Hola!");
}

function cargarTareas() {
  const listaTareas = document.getElementById("tareas");
  fetch("http://localhost:3000/tareas")
    .then((resultado) => resultado.json())
    .then(({ tareas }) => {
      tareas.forEach((tarea) => {
        const li = document.createElement("li"); //<li></li>
        li.textContent = tarea.nombre;
        listaTareas.appendChild(li);
      });
    });
}
