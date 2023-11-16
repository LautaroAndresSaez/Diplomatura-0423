console.log("Hola!");

window.addEventListener("scroll", (e) => {
  const barra = document.getElementById("barra");
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const porcentajeScroll = (window.scrollY / maxScroll) * 100;
  console.log(porcentajeScroll, Math.floor(porcentajeScroll));
  barra.style.width = `${Math.floor(porcentajeScroll)}vw`;
});
