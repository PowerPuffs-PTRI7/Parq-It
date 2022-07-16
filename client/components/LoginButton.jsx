import React, { useState } from "react";
import LoginPopup from "./LoginPopup.jsx";
import LogoutButton from "./LogoutButton.jsx";
import "../styles.scss";


function LoginButton(props) {
  if (props.user_id) {
    return <><LogoutButton /></>
  } else {
    return <><LoginPopup /></>
  }
}

export default LoginButton;
