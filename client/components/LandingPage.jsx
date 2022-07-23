import * as React from "react";
import { Link , Redirect, useHistory} from "react-router-dom";
import "../styles.scss";
import axios from "axios";
import topoBackground from "../assets/topoBackground.png";
import bookArchway from "../assets/book archway.png";
import hostArchway from "../assets/host archway.png";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@mui/material/TextField";
import LoginPopup from "./LoginPopup.jsx"
import AboutPage from "./About.jsx"
import Host from "./Host.jsx"
import LoggedinPage from "./LoggedinPage.jsx";
import Confirmation from "./Confirmation.jsx";
import { useParams } from "react-router-dom";


export default function LandingPage(props) {
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
    input: {
      color: "white",
    },
  }));

  const classes = useStyles();

  const [address, setAddress] = useState("");
  const [success, setSuccess] = useState()
  // const [data, setData] = useState({
  //   lat: 34.052235,
  //   lng: -118.243683,
  //   listings: [],
  // });

  let history = useHistory();
  const params = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/api/all", {
        address: address,
      })
      .then((res) => {
        history.push({
          pathname: '/dashboard',
          data: res.data})
        })
      .catch((err) => {
        console.log(`Error occured in useEffect: ${err}`);
      });

  };

  if(props.success == true) {
    if(success) {
      //do nothing
    }
    else {
      console.log(params); // :hostUsername/:bookingDate/:length/:location
      console.log('success is indeed true')
      axios
        .post('/order', 
        {
          hostUsername: params.hostUsername,
          bookingDate: params.bookingDate,
          length: params.length,
          location: params.location,
        },
        {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
        }
      })
      setSuccess(<Confirmation/>)
    }
  }


  return (
    <div style={{ display: "flex", flexDirection: "column" }}>

      <div className="topoSearch" style={{ height: "350px" }}>
        <img className="topo" src={topoBackground} width="100%"></img>

        <div className="landingSearch">
          <form onSubmit={handleSubmit} >
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
                    <div className='search-icon-div' onClick={handleSubmit}>
                      <SearchIcon sx={{ color: "#B9D8D8" }} />
                    </div>
                  </InputAdornment>
                ),
              }}
            ></TextField>
          </form>
        </div>
      </div>
          {success}
      <div className="archways" style={{ height: `calc( 100vh - 440px)` }}>
        <div
          className="leftArch"
          style={{ width: "49%", height: "100%", float: "left" }}
        >
          <Link to="/dashboard">
            <button className="leftArchText">book</button>
          </Link>
          <img className="archway" src={bookArchway} width="100%"></img>
        </div>
        <div
          className="rightArch"
          style={{ width: "50%", height: "100%", float: "right" }}
        >
          <Link to="/dashboard">
            <button className="rightArchText">host</button>
          </Link>
          <img className="archway" src={hostArchway} width="100%"></img>
        </div>
      </div>
    </div>
  );
}
