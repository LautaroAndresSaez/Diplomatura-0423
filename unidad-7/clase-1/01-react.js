import Alumno from "./Alumno.js";
import { myFuncion } from "./myFuncion.js";
const App = () => {
  console.log(myFuncion(5));
  return React.createElement(
    "div",
    {},
    React.createElement(
      "h1",
      {
        id: "titulo",
        onClick: () => console.log("Hola!"),
        className: "gato perro",
      },
      "Hola Mundo!"
    ),
    React.createElement("h1", {}, "Hola Mundo"),
    React.createElement(Alumno, {
      nombre: "Martín",
      lenguaje: "JS",
      intereses: ["Helado", "Fútbol", "Danza"],
    }),
    React.createElement(Alumno, {
      nombre: "Alejandra",
      lenguaje: "JS",
      intereses: ["Helado", "Fútbol", "Viajes", "Música"],
    }),
    React.createElement(Alumno, {
      nombre: "Lucrecia",
      lenguaje: "JS",
      intereses: ["Helado", "Danza", "Viajes"],
    })
  );
};

const rootDiv = document.getElementById("root");

ReactDOM.render(React.createElement(App), rootDiv);
