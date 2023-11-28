console.log("Estas en el home");

const cargarProductos = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const productos = await response.json();
  return productos;
};

const mostrarProductos = async () => {
  const productos = await cargarProductos();
  const ul = document.getElementById("productos");
  productos.forEach((producto) => {
    const item = itemProducto(producto);
    ul.appendChild(item);
  });
};

const itemProducto = (producto) => {
  const li = document.createElement("li");
  const titulo = document.createElement("h3");
  titulo.textContent = producto.title;
  const img = document.createElement("img");
  img.src = producto.image;
  const comprar = document.createElement("button");
  comprar.textContent = `Comprar por: ${producto.price}$`;

  comprar.addEventListener("click", () => {
    localStorage.setItem("productoId", producto.id);
    location = "./producto.html";
  });

  li.appendChild(titulo);
  li.appendChild(img);
  li.appendChild(comprar);
  return li;
};

mostrarProductos();
