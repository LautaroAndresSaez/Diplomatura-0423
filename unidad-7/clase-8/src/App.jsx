import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import styled from "styled-components";
import Button from "./components/Button";
import { QueryClientProvider } from "@tanstack/react-query";

const body = {
  title: "test product",
  price: 13.5,
  description: "lorem ipsum set",
  image: "https://i.pravatar.cc",
  category: "electronic",
};

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #bf4f74;
`;

function App() {
  const [isHover, setIsHover] = useState(false);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }, []);

  const postProductsAxios = (body) =>
    axios
      .post("https://fakestoreapi.com/products", body) // En axios no necesitamos convertir a JSON.
      .then((response) => response.data)
      .then((response) => console.log(response));

  return (
    <QueryClientProvider client={queryClient}>
      <Title>Hola mundo!</Title>
      <button
        style={{
          // Prestar atención a las doble llaves.
          backgroundColor: !isHover ? "#7286d3" : "#e5e0ff", // Manejamos los colores de forma condicional.
          color: isHover ? "#7286d3" : "#e5e0ff", // Abajo están agrupados simplemente por motivos de espacio.
          cursor: "pointer",
          borderRadius: "0.5rem",
          border: "0",
          margin: "0.5rem 0",
          padding: "0.5rem 1rem",
          fontWeight: "bold", // Atentos al reemplazo de guiones por camel case en “font-weight” o “background-color”.
        }}
        onMouseEnter={() => setIsHover(true)} // ¿Se animan a agregarle lógica de cambiar color en base a la posición?
        onMouseLeave={() => setIsHover(false)} // ¿Se animan a agregarle lógica de tiempo o que quede siempre seleccionado?
      >
        Agregar
      </button>
      <Button onClick={() => postProductsAxios(body)}>enviar por axios!</Button>
    </QueryClien>
  );
}

export default App;
