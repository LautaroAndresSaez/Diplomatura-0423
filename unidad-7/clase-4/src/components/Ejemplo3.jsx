import React, { useState, useEffect } from "react";
const Ejemplo3 = (props) => {
  const [count, setCount] = useState(4);
  const [message, setMessage] = useState("");
  const MIN_COUNT = 1;
  useEffect(() => {
    console.log('Se llamo el efecto')
    // En el primer parámetro del useEffect definimos el callback que va a ser ejecutado cada vez que cambie el array de dependencias.
    if (count === MIN_COUNT) {
      fetch(`https://reqres.in/api/users?page=${MIN_COUNT}`)
        .then((data) => data.json())
        .then((response) => setMessage("Llego la data!"))
        .catch(() => setMessage("Hubo un error en el llamado."));
    }
  }, [count]);
  return (
    <div>
      <p>
        {" "}
        El contador actual es: {count} {message}{" "}
      </p>
      <button onClick={() => setCount(count - 1)}>- 1</button>
    </div>
  );
};

export default Ejemplo3;
