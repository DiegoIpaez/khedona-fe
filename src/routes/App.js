import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Footer from "../components/Footer";
import Navbarjsx from "../components/Navbar";

import Home from "../pages/Home";


function App() {
  return (
    <Router>
      <Navbarjsx />      
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
