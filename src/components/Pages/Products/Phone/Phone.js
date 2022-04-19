import React from "react";
import { Row } from "react-bootstrap";
import useProducts from "../../../../hooks/useProducts";
import Product from "../Product/Product";

const Phone = () => {
  const [products] = useProducts();
  const phones = products.filter((product) => product.category === "phone");
  return (
    <Row>
      <h2 className="text-primary my-5">Phones</h2>
      {phones.map((item) => (
        <Product item={item} key={item.id}></Product>
      ))}
    </Row>
  );
};

export default Phone;
