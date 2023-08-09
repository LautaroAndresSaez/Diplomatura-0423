const persona = {
  nombre: "Damian",
  edad: 26,
  saludar() {
    //algo

    return `Hola ${this.nombre}, y tengo ${this.edad} años`;
  },
};

const saludo = persona.saludar();
//const saludo = "Hola Damian, y tengo 26 años";
persona.nombre = "Julian";
const saludo2 = persona.saludar();
console.log(saludo);
console.log(saludo2);
