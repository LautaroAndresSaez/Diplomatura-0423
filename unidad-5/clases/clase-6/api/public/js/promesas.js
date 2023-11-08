console.log("Ejemplos con promesas");

setTimeout(() => console.log("1"), 1500);

fetch("https://reqres.in/api/users?page=2")
  .then((resultado) => resultado.json())
  .then((data) => console.log(data));

fetch("https://reqres.in/api/users/2")
  .then((resultado) => resultado.json())
  .then((data) => console.log(data));

console.log("Primer log");

console.log("Ultimo log");
