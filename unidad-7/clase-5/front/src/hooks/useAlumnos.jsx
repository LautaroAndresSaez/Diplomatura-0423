import { useEffect, useState } from "react";

export const useAlumnos = () => {
  const [alumnos, setAlumnos] = useState(null);

  useEffect(() => {
    cargarAlumnos();
  }, []);

  const cargarAlumnos = () => {
    fetch("/api/alumnos")
      .then((resp) => resp.json())
      .then((data) => setAlumnos(data.alumnos));
  };

  return {
    alumnos,
    cargarAlumnos,
  };
};
