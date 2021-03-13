import React from "react";
import GoogleLogin from "react-google-login";
import { google_clientId } from "../config.json";

const Login = ({ handleLoginSuccess, handleLoginError }) => {
  const test = (response) => {
    console.log(response);
  };
  return (
    <GoogleLogin
      clientId={google_clientId}
      onSuccess={handleLoginSuccess}
      onFailure={handleLoginError}
      isSignedIn={true}
    />
  );
};

export default Login;
