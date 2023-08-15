const fs = require("fs");

const alumnosString = fs.readFileSync("./alumnos.json", "utf-8");
const alumnos = JSON.parse(alumnosString);

alumnos.push({
  name: "Mati",
  programa: true,
});

fs.writeFileSync("./alumnos.json", JSON.stringify(alumnos));
