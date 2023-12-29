import React, { useState } from "react";

export default function AgregarAlumno({ onSubmit }) {
  const [alumno, setAlumno] = useState({
    nombre: "",
    edad: 18,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "nombre") {
      setAlumno({
        ...alumno,
        nombre: value,
      });
    } else {
      setAlumno({
        ...alumno,
        edad: parseInt(value),
      });
    }
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    const resp = await fetch("/api/alumnos", {
      method: "POST",
      body: JSON.stringify(alumno),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (resp.ok) {
      onSubmit();
      setAlumno({ nombre: "", edad: 18 });
    }
    const result = await resp.json();
    console.log(result);
  };

  return (
    <form onSubmit={handleSumbit}>
      <label>
        Nombre:{" "}
        <input name="nombre" value={alumno.nombre} onChange={handleChange} />
      </label>
      <label>
        Edad:{" "}
        <input
          name="edad"
          type="number"
          value={alumno.edad}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Cargar alumno!</button>
    </form>
  );
}
