import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>This is Cart</h2>
      <div className="d-inline-block my-5">
        <Button
          onClick={() => {
            navigate("/orders");
          }}
          className="btn btn-secondary m-3"
        >
          Go to the Orders
        </Button>
        <Button
          onClick={() => {
            navigate("/checkout");
          }}
          className="btn btn-secondary m-3"
        >
          Proceed Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
