import React from "react";
import Card from "./Card";

export default function Product({ src, desc }) {
  return (
    <Card type="vertical">
      <img
        className="product-img"
        src={
          src ||
          "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg"
        }
      />
      <p>{desc}</p>
      <button className="product-button">Comprar</button>
    </Card>
  );
}
