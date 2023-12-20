import { useState } from "react";

import "./App.css";
import Card from "./components/Card";
import ExampleSection from "./components/ExampleSection";
import Product from "./components/Product";
import Form from "./components/Form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ExampleSection title="Tipos de Cards">
        <div className="ejemplo">
          <Card type="vertical">Vertical-normal</Card>
          <Card type="vertical" size="grande">
            Vertical-grande
          </Card>
        </div>
        <div className="ejemplo">
          <Card>Horizontal-normal</Card>
          <Card size="grande">Horizontal-grande</Card>
        </div>
      </ExampleSection>
      <ExampleSection title="Componente de producto">
        <Product
          src="https://picsum.photos/200/200"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, earum. Officiis ipsa inventore odit, rem vero ab facilis numquam temporibus!"
        />
        <Product desc="Sin imagen" />
      </ExampleSection>
      <ExampleSection title="Formulario">
        <Form />
      </ExampleSection>
    </>
  );
}

export default App;
