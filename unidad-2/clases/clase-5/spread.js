const alumno = {
  name: "Mariano",
  programa: true,
  email: "Mariano@gmail.com",
};

const { programa, ...rest } = alumno;

console.log(programa);

console.log(rest);

const alumno2 = { ...alumno, email: "Mariano2@gmail.com" };

console.log(alumno2);
console.log(alumno);
