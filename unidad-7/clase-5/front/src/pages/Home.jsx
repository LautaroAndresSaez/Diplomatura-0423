import React, { useEffect, useState } from "react";
import AgregarAlumno from "../components/AgregarAlumno";
import Alumnos from "../components/Alumnos";
import { useAlumnos } from "../hooks/useAlumnos";

export default function Home({ isAdmin }) {
  const { alumnos, cargarAlumnos } = useAlumnos();
  return (
    <div>
      <h1>Pagina de inicio</h1>
      {isAdmin ? (
        <div>opciones de administrador</div>
      ) : (
        <div>opciones de usuario</div>
      )}
      <AgregarAlumno onSubmit={cargarAlumnos} />
      <Alumnos alumnos={alumnos} />
    </div>
  );
}
