console.log("estas en producto");

const cargarProducto = async () => {
  const id = localStorage.getItem("productoId");
  const respuesta = await fetch(`https://fakestoreapi.com/products/${id}`);
  const producto = await respuesta.json();
  return producto;
};

const mostrarCompra = async () => {
  const producto = await cargarProducto();
  const root = document.getElementById("root");
  const atras = document.createElement("button");
  atras.textContent = "Volver!";
  atras.addEventListener("click", () => {
    location = "./index.html";
  });
  const title = document.createElement("h1");
  title.textContent = producto.title;
  const img = document.createElement("img");
  img.src = producto.image;
  const desc = document.createElement("p");
  desc.textContent = producto.description;
  root.append(atras, title, img, desc);
};

mostrarCompra();
