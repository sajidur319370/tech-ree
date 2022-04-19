import React from "react";
import { Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Product = ({ item }) => {
  const { id, name, img, description, price } = item;
  const navigate = useNavigate();
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
        <Button onClick={() => navigate(`/products/${id}`)} variant="link">
          See Details
        </Button>
      </div>
      <Button className="position-absolute bottom-0 start-50 translate-middle">
        Add To cart
      </Button>
    </Col>
  );
};

export default Product;
