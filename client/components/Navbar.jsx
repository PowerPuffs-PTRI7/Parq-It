import React from 'react';
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Host from "./Host.jsx";
import { Link } from "react-router-dom";
import logo from "../assets/blueParq.png";
import AboutPage from "./About.jsx";
import LoginButton from "./LoginButton.jsx";


function Navbar(props) {
  return (
    <div className="navBar" style={{ height: "70px" }} sx={{ flexGrow: 1 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Toolbar>
            <Button color="inherit" sx={{ flexGrow: 1 }}>
            <Link to="/dashboard" style={{ textDecoration: 'none' }}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  textTransform: "none",
                  fontWeight: "light",
                  color: "#36454F",
                }}
              >
                book
              </Typography>
            </ Link>
            </Button>
            <Button color="inherit" sx={{ flexGrow: 1 }}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  textTransform: "none",
                  fontWeight: "light",
                  color: "#36454F",
                }}
              >
                <Host />
              </Typography>
            </Button>
            <Link to="/">
              <Button>
                <img className="websiteLogo" src={logo} />
              </Button>
            </Link>
            <Button color="inherit" sx={{ flexGrow: 1 }}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  textTransform: "none",
                  fontWeight: "light",
                  color: "#36454F",
                }}
              >
                <AboutPage />
              </Typography>
            </Button>
            <Button color="inherit" sx={{ flexGrow: 1 }}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  textTransform: "none",
                  fontWeight: "light",
                  color: "#36454F",
                }}
              >
                 <LoginButton user_id={props.userInfo.user_id}/>
              </Typography>
            </Button>
          </Toolbar>
        </Box>
      </div>
  );
}

export default Navbar;