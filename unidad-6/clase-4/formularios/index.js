console.log("Hola!");
//Estado del formulario
const formulario = {
  name: "",
  password: "",
  email: "",
};

const form = document.getElementById("form");

const inputs = document.querySelectorAll("input"); //array de input

inputs.forEach((input) => {
  input.addEventListener("focus", () => {
    input.style.backgroundColor = "red";
  });
});

form.addEventListener("input", (e) => {
  const { value, name } = e.target;
  formulario[name] = value;
  const botonEnviar = document.getElementById("enviar");
  const esValido = validarFormulario();
  botonEnviar.disabled = !esValido;
});

const validarFormulario = () => {
  if (formulario.name.length === 0) return false;
  if (formulario.email.length === 0) return false;
  if (formulario.password.length === 0) return false;
  return true;
};

const validarFormularioPro = () => {
  return Object.values(formulario).every((field) => field.trim().length > 0);
};
