import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const Signup = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
  };
  return (
    <div className="bg-dark">
      <h2 className="text-warning bg-dark py-5">Please Sign Up</h2>
      <div className="w-50 mx-auto text-start py-5">
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3 text-white" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3 text-white" controlId="formBasicPassword">
            <Form.Label>Enter a new Password</Form.Label>
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Enter a new Password"
              required
            />
          </Form.Group>

          <Form.Group
            className="mb-3 text-white"
            controlId="formBasicConfirmPassword"
          >
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              ref={confirmPasswordRef}
              type="password"
              placeholder="Confirm Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3 text-white" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>

        <p className="text-white my-5">
          Already have an account?{" "}
          <Link to="/login" className="text-warning text-decoration-none mx-2">
            Please login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
