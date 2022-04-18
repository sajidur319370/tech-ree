import React from "react";
import { Container } from "react-bootstrap";
import Phone from "../Phone/Phone";
import Tv from "../Tv/Tv";
import Watch from "../Watch/Watch";

const Products = () => {
  return (
    <Container>
      <Watch></Watch>
      <Phone></Phone>
      <Tv></Tv>
    </Container>
  );
};

export default Products;
