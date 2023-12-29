import React, { useState } from "react";

export default function Alumnos({ alumnos }) {
  const [ordenarPor, setOrdenarPor] = useState("edad");
  if (!alumnos) return <h2>Cargando...</h2>;
  return (
    <div>
      <label>Ordernar por:</label>
      <select
        onChange={(e) => {
          console.log(e.target.value);
          setOrdenarPor(e.target.value);
        }}
      >
        <option value="edad">edad</option>
        <option value="nombre">nombre</option>
      </select>
      <ul>
        {alumnos
          .sort((a, b) => {
            if (ordenarPor === "edad") return a.edad - b.edad;
            return a.nombre.charCodeAt(0) - b.nombre.charCodeAt(0);
          })
          //.filter((alumno) => alumno.edad > 18)
          .map((alumno) => (
            <li key={`alumno-list-${alumno.id}`}>
              <h3>Nombre: {alumno.nombre}</h3>
              <h4>Edad: {alumno.edad}</h4>
            </li>
          ))}
      </ul>
    </div>
  );
}
