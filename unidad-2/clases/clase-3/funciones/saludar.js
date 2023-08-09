const saludar = (nombre, edad) => {
  if (edad > 18) {
    return `Hola ${nombre}, tenes ${edad} años`;
  } else {
    return "No tenes saludo";
  }
};

module.exports = saludar;
