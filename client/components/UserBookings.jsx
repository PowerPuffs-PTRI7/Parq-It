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

export default function UserBookings() {
    const useStyles = makeStyles(() => ({
      textField: {
        width: "98%",
        height: "50%",
        marginLeft: "auto",
        marginRight: "auto",
        paddingBottom: 0,
        marginTop: 0,
        fontWeight: 500,
        borderRadius: 0,
      },
      overrides: {
        border: 0,
        borderRadius: 20,
      },
      input: {
        color: "white",
      },
    }));
  
    const classes = useStyles();
  
    const [bookings, setBookings] = useState([])

    useEffect(() => {
       axios.post("http://localhost:3000/api/allbookings", 
       { "username": "Luigi" })
       // also need to figure out how to pass the username to the req body from the login
       .then(res => {
         setBookings(res.data)
         console.log("we are getting the axios call --->", res.data) 
       })
       .catch((err) => {
         console.log(`Error occured in useEffect: ${err}`);
       });
     }, []
   );

return (
    <div>
 <ul>
   <li>Hi people</li>
      {
        // bookings.map(booking => <li key={booking.hostUsername}> {booking.location} </li>)
      }
    </ul>
   </div>
)}