import React from "react";
import { Button, Col } from "react-bootstrap";

const Product = ({ item }) => {
  const { name, img, description, price } = item;
  return (
    <Col
      sm={12}
      md={6}
      lg={4}
      className="border border-3 p-2 position-relative"
    >
      <img src={img} alt="" />
      <div className="my-5 py-5">
        <h3>{name}</h3>
        <p>{description}</p>
        <h4>price: ${price}</h4>
      </div>
      <Button className="position-absolute bottom-0 start-50 translate-middle">
        Add To cart
      </Button>
    </Col>
  );
};

export default Product;
