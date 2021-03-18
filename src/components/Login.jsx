import React from "react";
import GoogleLogin from "react-google-login";
import { google_clientId } from "../config.json";

const Login = ({ handleLoginSuccess, handleLoginError }) => {
  return (
    <GoogleLogin
      clientId={google_clientId}
      render={(props) => (
        <button onClick={props.onClick} className="btn btn-outline-light">
          {/* <img
            width="20px"
            style={{ marginRight: 5, marginBottom: 3 }}
            alt="Google sign-in"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
          /> */}
          Login
        </button>
      )}
      onSuccess={handleLoginSuccess}
      onFailure={handleLoginError}
      isSignedIn={true}
    />
  );
};

export default Login;
