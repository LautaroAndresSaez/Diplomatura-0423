const fs = require("fs");

const toEmails = () => {
  const usersString = fs.readFileSync("./data/users.json");
  const users = JSON.parse(usersString);

  //Convertimos el array de usuarios a un array de emails con map
  const emails = users.map((user) => user.email);

  //Como algunos usuarios no tiene email filtramos todos los campos que no existan
  const validEmails = emails.filter((email) => email);
  //Recorda que si un string esta definido se comporta como un true y si no existe (es decir vale undefined) se comporta como false
  return validEmails;

  /* 
        Es posible implementar las lineas 8 y 11 en una sola de esta manera:

        const emails = users.map(user => user.email).filter(email => email)
    */
};

console.log(toEmails());
