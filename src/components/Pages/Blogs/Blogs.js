import React from "react";
import { Container } from "react-bootstrap";

const Blogs = () => {
  return (
    <Container>
      <h2 className="text-primary p-2">
        1. Difference between authorization and authentication :
      </h2>
      <p className="py-2">
        In authentication process, the identity of users are checked for
        providing the access to the system.While in authorization process,
        person's or user's authorities are checked for accessing the
        resources.In authentication process, users or persons are verified.While
        in this process, users or persons are validated.It is done before the
        authorization process.While this process is done after the
        authentication process.
      </p>
      <h2 className="text-primary p-2">
        1. Why are you using firebase? What other options do you have to
        implement authentication?
      </h2>
      <p className="py-2">
        In a nutshell, Firebase Authentication is an extensible token-based auth
        system and provides out-of-the-box integrations with the most common
        providers such as Google, Facebook, and Twitter, among others. It
        enables us to use custom claims which we'll leverage to build a flexible
        role-based API. other options:
      </p>

      <h2 className="text-primary p-2">
        3.What other services does firebase provide other than authentication ?
      </h2>
      <p className="py-2">
        There are many services which Firebase provides, Most useful of them
        are: Cloud Firestore, Cloud Functions, Hosting, Cloud Storage, Google
        Analytics, Predictions, Cloud Messaging.
      </p>
    </Container>
  );
};

export default Blogs;
