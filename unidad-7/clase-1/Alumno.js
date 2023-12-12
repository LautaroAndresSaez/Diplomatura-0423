const Alumno = (props) => {
  console.log(props);
  const { nombre, intereses, lenguaje } = props;
  const interesesFormateados = intereses.join(", ");
  return React.createElement(
    "div",
    {
      className: "alumno",
      onClick: () => console.log(`Hola soy ${nombre}`),
    },
    [
      React.createElement("h2", {}, `Nombre: ${nombre}`),
      React.createElement("h3", {}, `Lenguaje: ${lenguaje}🦾`),
      React.createElement("h4", {}, `Interes: ${interesesFormateados}`),
    ]
  );
};

export default Alumno;
