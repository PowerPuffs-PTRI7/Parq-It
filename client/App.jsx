import { Map } from "@mui/icons-material";
import React, { Component, useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard.jsx";
import LandingPage from "./components/LandingPage.jsx";
import "./styles.scss";
import Navbar from "./components/Navbar.jsx";
import axios from "axios";
import FourOhhhFour from './components/404.jsx';




const App = (props) => {


  const [userInfo, setUserInfo] = useState({user_id: null});
  const [tripInfo, setTripInfo] = useState([]);

  //conditional check on sessionstorage to grab user_id;
  const session_id = sessionStorage.getItem('access_token');
  const isInitialMount = useRef(true);

  useEffect (() => {
    if (isInitialMount.current && session_id) {
      console.log('Check Login hit')
      axios.get('/api/checkLogin', {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
        }
      })
      .then((response) => {
        setUserInfo({user_id: response.data});
        isInitialMount.current = false;
      })
      .catch(err => {
        console.log(err);
      })
    } else {
      return;
    }
  });

  return (
    <Router>
    <div className="router">
      <main>
        <Navbar setUserInfo={setUserInfo} userInfo={userInfo} />
          <Switch> 
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
          {/* <Route exact path="/success">
            <p>Whats up!</p>
            {/* <LandingPage success={true} /> */}
          {/* </Route> */}
            <Route path="/checkout/:hostUsername/:bookingDate/:length/:location">
              <LandingPage success={true} session_id={session_id}/>
            </Route>
            <Route path="*">
              <FourOhhhFour />
            </Route>
          </Switch>
      </main> 
    </div>
    </Router>
  );
};

export default App;
