import { Map } from "@mui/icons-material";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./components/Dashboard.jsx";
import LandingPage from "./components/LandingPage.jsx";
import LoggedinPage from "./components/LoggedinPage.jsx";
import "./styles.scss";

const App = (props) => {
  return (
    <div className="router">
      <main>
        <Router>
          <Switch>
            {/* change root path ("/") to userpage to design the page */}
            {/* <Route exact path="/" component={LandingPage} /> */}
            <Route exact path="/" component={LoggedinPage} />
            <Route exact path="/dashboard" component={Dashboard} />
            {/* <Route exact path="/userpage" component={LoggedinPage} /> */}
          </Switch>
        </Router>
      </main>
    </div>
  );
};

export default App;
