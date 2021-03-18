import React from "react";
import { GoogleLogout } from "react-google-login";

import { google_clientId } from "../config.json";

const Logout = ({ handleLogout }) => {
  return (
    <GoogleLogout
      clientId={google_clientId}
      render={(props) => <span onClick={props.onClick}>Logout</span>}
      onLogoutSuccess={handleLogout}
    />
  );
};

export default Logout;
