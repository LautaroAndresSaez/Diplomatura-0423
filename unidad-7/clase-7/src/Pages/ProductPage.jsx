import React from "react";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  const { id } = useParams();

  return <div>Descripcion del producto {id}</div>;
}
