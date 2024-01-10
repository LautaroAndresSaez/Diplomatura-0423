import React from "react";
import { useState } from "react";
import { useAuthStore } from "../states/AuthStore";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const login = useAuthStore((state) => state.login);

  
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(name);
    setName("");
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre: <input onChange={(e) => setName(e.target.value)} value={name} />
      </label>
      <button type="submit">Entrar!</button>
    </form>
  );
}
