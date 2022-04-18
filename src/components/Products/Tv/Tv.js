import React from "react";
import { Row } from "react-bootstrap";
import useProducts from "../../../hooks/useProducts";
import Product from "../Product/Product";

const Tv = () => {
  const [products] = useProducts();
  const televisions = products.filter((product) => product.category === "tv");
  return (
    <Row>
      <h2 className="text-primary my-5">Tv's</h2>
      {televisions.map((item) => (
        <Product item={item} key={item.id}></Product>
      ))}
    </Row>
  );
};

export default Tv;
