import React from "react";
import { Container } from "react-bootstrap";
import myImg from "../../../images/me/sajidur.jpg";

const About = () => {
  return (
    <Container className="d-flex">
      <img src={myImg} alt="" className="w-50 h-50" />
      <div className="p-2">
        <h2 className="py-2">Hi I Am Sajidur Rahman,Frontend Developer.</h2>
        <p>My Passion is to be good Backend Sofware Engineer</p>
      </div>
    </Container>
  );
};

export default About;
