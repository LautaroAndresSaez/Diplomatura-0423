console.log("Hola!");

const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms); //Tiempo en millisegundos
  });
};

const cargarUsuarios = async () => {
  const respuesta = await fetch("https://reqres.in/api/users?page=1");
  const { data } = await respuesta.json();
  const lista = document.getElementById("avatars");
  console.log(data);
  data.forEach((usuario) => {
    const img = document.createElement("img");
    img.src = usuario.avatar;
    lista.appendChild(img);
  });
};

const cargaDitto = async () => {
  const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const json = await respuesta.json();
  console.log(json);
};

const fakeStore = async () => {
  const respuesta = await fetch("https://fakestoreapi.com/products");
  const json = await respuesta.json();
  console.log(json);
};

const chau = () => {
  location = "./hola.html";
};

fakeStore();
console.log("Return de cargarUsuario: ", cargarUsuarios());
