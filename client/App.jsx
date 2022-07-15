import { Map } from "@mui/icons-material";
import React, { Component, useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard.jsx";
import LandingPage from "./components/LandingPage.jsx";
import "./styles.scss";
import Navbar from "./components/Navbar.jsx";




const App = (props) => {


  const [userInfo, setUserInfo] = useState({user_id:null});
  const [tripInfo, setTripInfo] = useState([]);

  //conditional check on sessionstorage to grab user_id;
  const session_id = JSON.parse(sessionStorage.getItem('session_id'));
  const isInitialMount = useRef(true);

  useEffect (() => {
    if (isInitialMount.current && window.sessionStorage.getItem('session_id')) {
      axios.get('http://localhost:3000/session', {
        params: {
          session_id
        }
      })
      .then((response) => {
        setUserInfo(response.data);
        isInitialMount.current = false;
        console.log('data from session_id', response.data)
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
          {/* <Route
            path="/signup"
            element={userInfo.user_id ? <NavSignedIn setUserInfo={setUserInfo} userInfo={userInfo} /> : <NavSignUp />}
          />
          <Route
            path="/*"
            element={userInfo.user_id ? <NavSignedIn setUserInfo={setUserInfo} userInfo={userInfo} /> : <NavSignIn />}
          /> */}
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
      </main>
    </div>
    </Router>
  );
};

export default App;
