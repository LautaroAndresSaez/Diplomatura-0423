const formData = {};

root.addEventListener("click", (event) => {
  console.log(event);
});

const form = document.getElementById("form");
const input = document.getElementById("email");

document.getElementById("password-button").addEventListener("click", (ev) => {
  ev.preventDefault();
  const inputPassword = document.getElementById("password");
  if (inputPassword.type === "password") {
    inputPassword.type = "text";
    ev.target.textContent = "Ocultar contraseña";
    inputPassword.className = "password";
  } else {
    inputPassword.type = "password";
    ev.target.textContent = "Mostrar contraseña";
  }
});

form.addEventListener("input", (ev) => {
  const { name, value } = ev.target;
  formData[name] = value; //formData.email = value;
  const root = document.getElementById("root");
  if (name === "email") {
    root.textContent = "email invalido!";
  } else if (name === "password" && value.length < 8) {
    root.textContent = "La contraseña tiene que tener 8 caracteres";
  } else {
    root.textContent = "";
  }
});
