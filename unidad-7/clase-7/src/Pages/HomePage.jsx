import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuthStore } from "../states/AuthStore";

export default function HomePage() {
  const name = useAuthStore((state) => state.name);
  const isLogged = useAuthStore((s) => s.isLogged);
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged && navigate) navigate("/auth");
  }, [isLogged]);

  return (
    <div>
      <h1>Hola {name}</h1>
      {[1, 2, 3].map((id) => (
        <Link key={`product-link-${id}`} to={`/products/${id}`}>
          Ir al producto: {id}
        </Link>
      ))}
      <button onClick={() => logout()}>Salir!</button>
    </div>
  );
}
