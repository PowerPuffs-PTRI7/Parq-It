import React, { useState } from "react";
import LoginPopup from "./LoginPopup.jsx";
import LogoutButton from "./LogoutButton.jsx";
import "../styles.scss";


function LoginButton(props) {
  if (props.user_id) {
    return <><LogoutButton setUserInfo={props.setUserInfo} /></>
  } else {
    return <><LoginPopup setUserInfo={props.setUserInfo} /></>
  }
}

export default LoginButton;
