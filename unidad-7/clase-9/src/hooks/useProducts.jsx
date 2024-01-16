import { useEffect, useState } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const resp = await fetch("https://fakestoreapi.com/products");
    const products = await resp.json();
    setProducts(products);
  };

  return {
    products,
  };
};
