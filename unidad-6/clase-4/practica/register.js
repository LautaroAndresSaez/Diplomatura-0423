const formulario = {
  name: "",
  email: "",
  password: "",
  phone: "",
  address: "",
};

console.log("Estoy cargado!");
const form = document.getElementById("register");
const botonCrear = document.getElementById("crear");

form.addEventListener("input", (e) => {
  const { value, name } = e.target;
  formulario[name] = value;
  const esValido = validarFormulario();

  botonCrear.disabled = !esValido;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(formulario);
});

const validarFormulario = () => {
  if (formulario.address.length === 0) return false;
  if (formulario.phone.length === 0) return false;
  if (formulario.password.length === 0) return false;
  if (formulario.email.length === 0) return false;
  if (formulario.name.length === 0) return false;
  return true;
};
