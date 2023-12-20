import React from "react";
import Card from "./Card";
export default function Form() {
  return (
    <Card size="grande" type="horizontal">
      <Card type="horizontal">
        <form>
          <label>Usuario</label>
          <input />
          <label>Contraseña</label>
          <input />
          <button>Iniciar sesion</button>
        </form>
      </Card>
    </Card>
  );
}
