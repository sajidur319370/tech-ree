import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Signup = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");

  const [agree, setAgree] = useState(false);
  const [warning, setWarning] = useState("");

  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating] = useUpdateProfile(auth);

  const handleSignUp = async (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (password !== confirmPassword) {
      setWarning("Password doesnt match");
      return;
    }

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    alert("Updated profile");
  };

  if (user) {
    console.log(user);
  }
  return (
    <div className="bg-dark">
      <h2 className="text-warning bg-dark py-5">Please Sign Up</h2>
      <div className="w-50 mx-auto text-start pt-5">
        <Form onSubmit={handleSignUp}>
          <Form.Group className="mb-3 text-white" controlId="formBasicName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              ref={nameRef}
              type="text"
              placeholder="Enter Name"
              required
            />
          </Form.Group>

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
            <p className="text-danger">{warning}</p>
          </Form.Group>
          <Form.Group className="mb-3 text-white" controlId="formBasicCheckbox">
            <Form.Check
              onClick={() => setAgree(!agree)}
              className={agree ? "text-primary" : "text-danger"}
              type="checkbox"
              label="Accept Terms And Condition"
            />
          </Form.Group>
          <div className="text-center">
            <Button disabled={!agree} variant="primary" type="submit">
              Sign Up
            </Button>
          </div>
        </Form>

        <p className="text-white mt-5 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-warning text-decoration-none mx-2">
            Please log In
          </Link>
        </p>
      </div>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Signup;
