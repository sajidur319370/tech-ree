import React from "react";
import { Container } from "react-bootstrap";
import Phone from "../Phone/Phone";
import Tv from "../Tv/Tv";
import Watch from "../Watch/Watch";

const Products = () => {
  return (
    <Container>
      <h1 className="text-warning display-3 bg-dark my-5 ">
        Welcom To Our Store
      </h1>
      <Watch></Watch>
      <Phone></Phone>
      <Tv></Tv>
    </Container>
  );
};

export default Products;
