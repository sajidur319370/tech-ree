import React from "react";
import { Row } from "react-bootstrap";
import useProducts from "../../../../hooks/useProducts";
import Product from "../Product/Product";

const Watch = () => {
  const [products] = useProducts();
  const watches = products.filter((product) => product.category === "watch");
  return (
    <Row>
      <h2 className="text-primary my-5">Watches</h2>
      {watches.map((item) => (
        <Product item={item} key={item.id}></Product>
      ))}
    </Row>
  );
};

export default Watch;
