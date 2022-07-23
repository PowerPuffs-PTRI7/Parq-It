import React, { useState } from "react";
import AboutPage from "./About.jsx";
import UserPageButton from "./UserPageButton.jsx";
import "../styles.scss";


function UserPageButtons(props) {
  if (props.user_id) {
    return <UserPageButton />
  } else {
    return <AboutPage />
  }
}

export default UserPageButtons;
