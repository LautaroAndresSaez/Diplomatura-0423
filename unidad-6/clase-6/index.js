const form = document.getElementById("form");
const state = {};

const oldState = localStorage.getItem("estado");
console.log(JSON.parse(oldState));

form.addEventListener("input", (e) => {
  const { name, value } = e.target;
  state[name] = value;
  console.log(state);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem("estado", JSON.stringify(state));
});

const button = document.getElementById("frase");

button.addEventListener("click", async () => {
  console.log("Buscando frase...");
  const resp = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes");
  const quotes = await resp.json();
  console.log(quotes[0].quote);
});
