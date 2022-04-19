import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  let from = location.state?.from?.pathname || "/";

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(email, password);
  };

  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="bg-dark">
      <h2 className="text-warning bg-dark pt-5">Please Log in</h2>
      <div className="w-50 mx-auto text-start pt-5">
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
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Enter Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3 text-white" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Log In
          </Button>
        </Form>
        <p className="text-white mt-3">
          New to Tech-Ree?{" "}
          <Link to="/signup" className="text-warning text-decoration-none mx-2">
            Please Sign Up
          </Link>
        </p>
      </div>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
