import React, { useState, useEffect } from "react";

export default function Ejemplo2() {
  const [nombre, setNombre] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://reqres.in/api/users?page=2")
      .then((resp) => resp.json())
      .then(({ data }) => {
        setIsLoading(false);
        setPersonas(data);
      });
  }, []);
  useEffect(() => {
    console.log(`Me dispare: ${nombre}`);
    console.log(personas);
  }, [nombre]);

  if (isLoading) {
    return <h2>La pagina esta cargando...</h2>;
  }

  return (
    <div>
      <input value={nombre} onChange={(e) => setNombre(e.target.value)} />
      <ul>
        {personas
          .filter((persona) => persona.first_name.includes(nombre))
          .map((persona) => (
            <li>{persona.first_name}</li>
          ))}
      </ul>
    </div>
  );
}
