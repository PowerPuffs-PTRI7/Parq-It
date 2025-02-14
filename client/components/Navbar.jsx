import React from 'react';
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Host from "./Host.jsx";
import { Link } from "react-router-dom";
import logo from "../assets/blueParq.png";
import UserPageButtons from "./UserPageButtons.jsx";
import LoginButton from "./LoginButton.jsx";


function Navbar(props) {
  return (
    <div className="navBar" style={{ height: "70px" }} sx={{ flexGrow: 1 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Toolbar>
            <Link to="/dashboard" style={{ textDecoration: 'none', flexGrow: 1, textAlign: 'center' }}>
            <Button color="inherit" sx={{ width: '100%' }}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  textTransform: "none",
                  fontWeight: "light",
                  color: "#36454F",
                }}
              >
                <div className='nav-text'>
                book
                </div>
              </Typography>
            </Button>
            </ Link>
            <Host />
            <Link to="/">
              <Button>
                <img className="websiteLogo" src={logo} />
              </Button>
            </Link>
            <UserPageButtons user_id={props.userInfo.user_id} />
            <LoginButton user_id={props.userInfo.user_id} setUserInfo={props.setUserInfo}/>
          </Toolbar>
        </Box>
      </div>
  );
}

export default Navbar;