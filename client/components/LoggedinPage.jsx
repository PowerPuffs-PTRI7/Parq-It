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
import AllBookings from "./AllBookings.jsx";

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
    bookings: [],
    hostings: []
  });

  useEffect(() => {
      axios.post("http://localhost:3000/api/allbookings", 
      { "username": "Luigi"})
      // also need to figure out how to pass the username to the req body from the login
      .then(res => {
        console.log("we are getting the axios call --->", res) 
        // setData({
        //   lat: 34.052235,
        //   lng: -118.243683,
        //   bookings: res.data,
        //   hostings: []
        // })
      })
      .catch((err) => {
        console.log(`Error occured in useEffect: ${err}`);
      });
    }, []
  )

  // const listingElems = listings.map((ele, i) => {
  //   //use this func to populate the tiles
  // });  

  const props = {
    data: data,
    isVisible: true,
    zoom: zoom,
  };

  //function for search bar
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post("http://localhost:3000/api/all", {
  //       address: address,
  //     })
  //     .then((res) => {
  //       setData(res.data);
  //       setZoom(13);
  //     })
  //     .catch((err) => {
  //       console.log(`Error occured in useEffect: ${err}`);
  //     });
  // };

  // trying to render the zoom of the map data
  useEffect(
    () => {
      // data is the initial state
      // where is state.location.data?!?!?!?!?!??!
      setData(state.location.data ? state.location.data : data);
      setZoom(13);
    },[]
  );

  //coming from line 76 -empty array
  // const listings = data.listings;
  // console.log('the listings are', listings)

  // const spotElems = listings.map((ele, i) => {
  //   // check if the distance is within 5 miles
  //   // if (d > 8.04672) {
  //   //   props.isVisible = false;
  //   // } else {
  //   //   props.isVisible = true;
  //   // }

  //   // only return spots with isVisible set to true
  //   // if (props.isVisible) {
  //   //   return <AllBookings key={i} info={ele} {...props} />;
  //   // }
  // });

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
      <div
        className="filterBar"
        style={{ height: "40px" }}
        sx={{ flexGrow: 1 }}
      >
        <div
          className="leftFilter"
          style={{ width: "30%", float: "left", marginLeft: "10px" }}
        >
          {/* <form onSubmit={handleSubmit}></form> */}
          <form >
            <TextField
              id="standard-search"
              variant="outlined"
              label="city, state, zip code"
              className={classes.textField}
              value={address}
              size="small"
              onChange={(e) => setAddress(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "#B9D8D8" }} />
                  </InputAdornment>
                ),
              }}
            ></TextField>
          </form>
        </div>

        <div className="rightFilter" style={{ width: "60%", float: "right" }}>
          <Button className="filterPrice" color="inherit" sx={{ width: 10 }}>
            <Typography
              component="div"
              sx={{
                textTransform: "none",
                fontWeight: "light",
                color: "#36454F",
              }}
            >
              price
            </Typography>
          </Button>
          <Button className="filterPrice" color="inherit" sx={{ width: 10 }}>
            <Typography
              // variant="h6"
              component="div"
              sx={{
                textTransform: "none",
                fontWeight: "light",
                color: "#36454F",
              }}
            >
              size
            </Typography>
          </Button>
          <Button className="filterPrice" color="inherit" sx={{ width: 10 }}>
            <Typography
              // variant="h6"
              component="div"
              sx={{
                textTransform: "none",
                fontWeight: "light",
                color: "#36454F",
              }}
            >
              type
            </Typography>
          </Button>
        </div>
      </div>
      <div className="mapAndTiles" style={{ height: `calc( 100vh - 145px )` }}>
        <div
          className="leftMap"
          style={{ width: "49%", height: "100%", float: "left" }}
        >
          <Maps className="map" {...props} />
        </div>
        <div
          className="rightTiles"
          style={{ width: "50%", height: "100%", float: "right" }}
        >
          <div className="bookingDiv" 
          style={{ width: "100%", height: "50%", border: "5px solid brown" }} 
          >
           <Typography
            component="div"
            sx={{
              textTransform: "none",
              fontWeight: "light",
              color: "#36454F",
              fontSize: "20px"
            }}
           > bookings </Typography></div>
          <br></br>
          <div className="hostingDiv" 
          style={{ width: "100%", height: "50%", border: "2px solid brown" }}
          >
            <Typography
            component="div"
            sx={{
              textTransform: "none",
              fontWeight: "light",
              color: "#36454F",
              fontSize: "20px"
            }}
           > hostings </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
