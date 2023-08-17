const funcionMagica = (nombre, callback) => {
  return callback(nombre, "Juan");
};

const saludarAlumnos = (alumno1, alumno2) => {
  console.log(`Hola ${alumno1} y ${alumno2}`);
};

const despedirAlumnos = (alumno1, alumno2) => {
  console.log(`Chau ${alumno1} y ${alumno2}`);
};

funcionMagica("Alfonso", saludarAlumnos);

funcionMagica("Federico", despedirAlumnos);
