const persona = {
  nombre: "Damian",
  edad: 26,
};

const and = persona.edad > 18 && persona.nombre === "Damian";
const or = persona.edad > 18 || persona.nombre === "Ale";
const negacion = !true;

console.log("operador and (&&): ", and);
console.log("operador or (||):", or);
console.log("negación (!):", negacion);
