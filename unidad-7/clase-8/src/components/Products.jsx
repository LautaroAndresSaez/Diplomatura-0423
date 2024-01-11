import { useQuery } from "@tanstack/react-query";
import { Flex, Spin } from "antd";
import React from "react";
import ExampleCard from "./Card";
import axios from "axios";

const getProducts = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  console.log(data);

  return data;
};

export default function Products() {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  if (isLoading) return <Spin />;
  return (
    <Flex vertical>
      {products?.map((product) => (
        <ExampleCard key={`product-card-${product.id}`} {...product} />
      ))}
    </Flex>
  );
}
