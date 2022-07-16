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
import ParkingSpotTest from "./ParkingSpotTest.jsx";

export default function LoggedinPage(state) {
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

  const [address, setAddress] = useState("");
  const [zoom, setZoom] = useState(10);
  const [data, setData] = useState({
    lat: 34.052235,
    lng: -118.243683,
    listings: [],
  });

  const props = {
    data: data,
    isVisible: true,
    zoom: zoom,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/all", {
        address: address,
      })
      .then((res) => {
        setData(res.data);
        setZoom(13);
      })
      .catch((err) => {
        console.log(`Error occured in useEffect: ${err}`);
      });
  };

  useEffect(
    () => {
      setData(state.location.data ? state.location.data : data);
      setZoom(13);
    },[]
  );
  // { lat: 34.052235, lng: -118.243683, listings: [] }

  const listings = data.listings;
  console.log('the listings are', listings)

  const spotElems = listings.map((ele, i) => {
    // convert latitude to longitude of the search to radians
    const radLatSearch = (Math.PI * data.lat) / 180;
    const radLngSearch = (Math.PI * data.lng) / 180;

    // convert latitude to longitude of the parking spot to radians
    const radLatSpot = (Math.PI * ele.coordinates.lat) / 180;
    const radLngSpot = (Math.PI * ele.coordinates.lng) / 180;

    // calculate the great circle
    var R = 6371; // km
    var dLat = radLatSpot - radLatSearch;
    var dLon = radLngSpot - radLngSearch;

    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.sin(dLon / 2) *
        Math.sin(dLon / 2) *
        Math.cos(radLatSearch) *
        Math.cos(radLatSpot);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;

    // console.log(d);
    // check if the distance is within 5 miles
    if (d > 8.04672) {
      props.isVisible = false;
    } else {
      props.isVisible = true;
    }

    // only return spots with isVisible set to true
    if (props.isVisible) {
      return <ParkingSpotTest key={i} info={ele} {...props} />;
    }
  });

  return (
    <>
    <button> BLAH </button>
    </>
  );
}
