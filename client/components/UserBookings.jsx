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
  const [bookings, setBookings] = useState([])

    useEffect(() => {
       axios.post("http://localhost:3000/api/allbookings", 
       { "token": `${sessionStorage.getItem("access_token")}` }
      // {
      //   headers: {
      //     Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
      //   },
      // }
       )
       .then(res => {
         setBookings(res.data)
         console.log("we are getting the axios call --->", res.data) 
       })
       .catch((err) => {
         console.log(`Error occured in useEffect: ${err}`);
       });
     }, []
   );

   const dateFunc = (bookingDate) => {
    const date = new Date(bookingDate)
    return date.toLocaleDateString()
   }

if (bookings.length === 0) {
  return (
    <div className="listingContainer">
        <div className="listingDiv"> 
        <b>{"No bookings found"}</b>
       </div>
   </div>
  )
} else {
return (
    <div className="listingContainer">
      {
        bookings.map(booking => 
        <div className="listingDiv"> 
        <b>{booking.location}
        <br></br>
        Start Date: {dateFunc(booking.bookingDate)} 
        <br></br>
        Booking Duration: {booking.length} days
        </b>
        {/* we need to add the price which is missing from the db*/}
        <div className="listingBtns">
        <button> Cancel </button>
        <button> Modify </button>
        <button> View Spot </button>
        </div>
        </div>) 
      }
   </div>
)
}
}