import React, { useState } from "react";
import 'Card.css'
export default function Card({ children }) {
  const [counter, setCounter] = useState(0);
  return (
    <div className="card">
      {children}
      <h3>{counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </div>
  );
}
