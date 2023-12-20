import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card/Card";

function App() {
  return (
    <>
      <h1>Mi pagina!</h1>

      <Card>
        <h2>Mesa</h2>
        <div>$250</div>
        <button>Comprar!</button>
      </Card>
      <Card>
        <h2>Silla</h2>
        <div>$350</div>
        <button>Comprar!</button>
      </Card>
    </>
  );
}

export default App;
