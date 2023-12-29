import { useState } from "react";

export default function Ejemplo1() {
  const [contador, setContador] = useState(0);
  return (
    <div>
      <img src="https://picsum.photos/200/300" />
      <h2>Total de likes: {contador}</h2>
      <button onClick={() => setContador(contador + 1)}>Like</button>
    </div>
  );
}
