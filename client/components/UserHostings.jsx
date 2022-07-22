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
import { useLocation } from "react-router";
import GetUsername from "./GetUsername.jsx";
import {ReactSession} from 'react-client-session'

export default function UserHostings() {
  // const username = ReactSession.get("username")
 const [hostings, setHostings] = useState([])

 useEffect(() => {
    axios.post("http://localhost:3000/api/allhostings", 
    { "token": `${sessionStorage.getItem("access_token")}` })
    .then(res => {
      setHostings(res.data)
      console.log("we are getting the axios call --->", res.data) 
    })
    .catch((err) => {
      console.log(`Error occured in useEffect: ${err}`);
    });
  }, []
);

const dateFunc = (hostingDate) => {
  const date = new Date(hostingDate)
  return date.toLocaleDateString()
 }

return (
  <div className="bookingContainer">
  {
    hostings.map(hosting=> 
    <div className="bookingDiv"> 
    <b>{hosting.address}
    <br></br>
    Price: ${hosting.price} Mattbucks
    <br></br>
    Options: {hosting.options}
    <br></br>
    Size: {hosting.size}
    </b>
    <div className="bookingBtns">
    <button> See Stats </button>
    <button> Modify Hosting </button>
    <button> Add Photo </button>
    </div>
    </div>) 
  }
</div>
)}