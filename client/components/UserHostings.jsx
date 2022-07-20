import * as React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles.scss";
import logo from "../assets/blueParq.png";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@mui/material/TextField";
import Maps from "./Map.jsx";
import ParkingSpot from "./ParkingSpot.jsx";
import { useEffect, useState } from "react";
import LoginPopup from "./LoginPopup.jsx";
import AboutPage from "./About.jsx";
import Host from "./Host.jsx";

export default function UserHostings() {

 const [hostings, setHostings] = useState([])

 useEffect(() => {
    axios.post("http://localhost:3000/api/allhostings", 
    { "username": "Luigi" })
    // also need to figure out how to pass the username to the req body from the login
    .then(res => {
      setHostings(res.data)
      console.log("we are getting the axios call --->", res.data) 
    })
    .catch((err) => {
      console.log(`Error occured in useEffect: ${err}`);
    });
  }, []
);

return (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <div className="navBar" style={{ height: "70px" }} sx={{ flexGrow: 1 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Toolbar>
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
              book
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
               <LoginPopup />
            </Typography>
          </Button>
        </Toolbar>
      </Box>
    </div>
  
       
      </div>
  //   <>
  //   <ul>
  //     {
  //       // bookings.map(booking => <li key={booking.hostUsername}> {booking.location} </li>)
  //     }
  //   </ul>
  //  </>
)}