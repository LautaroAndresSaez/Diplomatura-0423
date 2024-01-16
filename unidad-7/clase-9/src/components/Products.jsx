import { useEffect, useState } from "react";
import { useProducts } from "../hooks/useProducts";
import Product from "./Product";
import { Flex, Space } from "antd";

const Products = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [category, setCategory] = useState("");
  const [orderBy, setOrderBy] = useState("");

  const { products } = useProducts();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((resp) => resp.json())
      .then((categories) => setCategories(categories));
  }, []);
  return (
    <>
      <form>
        <h3>Buscar por:</h3>
        <label>
          Nombre:{" "}
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Precio minimo:{" "}
          <input
            min={0}
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.valueAsNumber)}
          />
        </label>
        <label>
          Categoria:{" "}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Todas las categorias</option>
            {categories.map((category, i) => (
              <option key={`product-category-item-${i}`} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
        <label>
          Ordenar por:
          <select value={orderBy} onChange={(e) => setOrderBy(e.target.value)}>
            <option value="">No ordenar</option>
            <option value="menorAMayor">De menor a mayor precio</option>
            <option value="mayorAMenor">De mayor a menor precio</option>
            <option value="alfabetico">Alfabetico</option>
          </select>
        </label>
      </form>
      <Flex wrap="wrap" align="center" justify="center" gap="small">
        {products
          .filter((product) =>
            product.title.toLowerCase().includes(name.toLowerCase())
          )
          .filter((product) => {
            if (!price) return true;
            return product.price > price;
          })
          .filter((product) => {
            if (!category) return true;
            return product.category === category;
          })
          .sort((a, b) => {
            if (!orderBy) return 0;
            if (orderBy === "menorAMayor") return a.price - b.price;
            if (orderBy === "mayorAMenor") return b.price - a.price;
            return a.title.charCodeAt(0) - b.title.charCodeAt(0);
          })
          .map((product) => (
            <Product key={`product-item-${product.id}`} {...product} />
          ))}
      </Flex>
    </>
  );
};

export default Products;
