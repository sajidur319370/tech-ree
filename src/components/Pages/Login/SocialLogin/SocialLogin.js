import React from "react";
import { Button } from "react-bootstrap";

const SocialLogin = () => {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        <div className="bg-white w-25" style={{ height: "4px" }}></div>
        <p className="text-warning m-2">or</p>
        <div className="bg-white w-25" style={{ height: "4px" }}></div>
      </div>
      <div className="d-flex flex-column w-25 mx-auto">
        <Button className="my-2">Google Sign In</Button>
        <Button className="my-2">Github Sign In</Button>
      </div>
    </div>
  );
};

export default SocialLogin;
