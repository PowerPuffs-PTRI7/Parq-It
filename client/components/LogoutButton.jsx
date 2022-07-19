import React from "react";
import { Redirect, useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import "../styles.scss";
import Typography from '@mui/material/Typography';
import axios from "axios";


function LogoutButton(props) {
  const history = useHistory();

  const handleClickOpen = (e) => {
    e.preventDefault();
    sessionStorage.removeItem('access_token');
    props.setUserInfo({user_id: null});
    history.push("/");
  };

  return (
    <Button color="inherit" onClick={handleClickOpen} sx={{ flexGrow: 1 }}>
      <Typography
        variant="h6"
        component="div"
        sx={{
          textTransform: "none",
          fontWeight: "light",
          color: "#36454F",
        }}
      >
        <div>
          <div color="inherit" sx={{ flexGrow: 1 }}>
          <Typography
              variant="h6"
              component="div"
              sx={{
                textTransform: "none",
                fontWeight: "light",
                color: "#36454F",
              }}>
              <div className='nav-text'>
                log out
             </div>
            </Typography>
          </div>
        </div>
      </Typography>
    </Button>
  );
}

export default LogoutButton;