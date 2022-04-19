import React from "react";
import { Button } from "react-bootstrap";
import googleIcon from "./socialIcon/google.png";
import githubIcon from "./socialIcon/github.png";
import facebookIcon from "./socialIcon/facebook.png";
import auth from "../../../../firebase.init";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
  const [signInWithFacebook, user3, loading3, error3] =
    useSignInWithFacebook(auth);
  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };
  const handleGithubSignIn = () => {
    signInWithGithub();
  };
  const handleFaceebookSignIn = () => {
    signInWithFacebook();
  };
  if (user1 || user2 || user3) {
    navigate("/home");
  }
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        <div className="bg-white w-25" style={{ height: "4px" }}></div>
        <p className="text-warning m-2">or</p>
        <div className="bg-white w-25" style={{ height: "4px" }}></div>
      </div>
      <div className="d-flex flex-column w-25 mx-auto">
        <p className="text-danger">
          {(error1 && error1.message) ||
            (error2 && error2.message) ||
            (error3 && error3.message)}
        </p>
        <Button
          onClick={handleGoogleSignIn}
          className="my-2"
          variant="secondary"
        >
          <img src={googleIcon} alt="" /> Google Sign In
        </Button>
        <Button onClick={handleFaceebookSignIn} className="my-2" variant="info">
          <img src={facebookIcon} alt="" /> Facebook Sign In
        </Button>
        <Button onClick={handleGithubSignIn} className="my-2" variant="success">
          <img src={githubIcon} alt="" /> Github Sign In
        </Button>
      </div>
    </div>
  );
};

export default SocialLogin;
