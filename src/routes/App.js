import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Navbarjsx from "../components/Navbar";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Admin from "../pages/Admin";
import Usuario from "../pages/Usuario";
import ProductosId from "../pages/ProductosId";
import CategoriasId from "../pages/CategoriasId";
import Carrito from "../pages/Carrito";
import ProtectedRoutes from "../helpers/ProtectedRoutes";

function App() {
  return (
    <Router>
      <Navbarjsx />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/products" component={ProductosId} />
        <Route exact path="/categs" component={CategoriasId} />
        <ProtectedRoutes exact path="/admin" component={Admin} />
        <ProtectedRoutes exact path="/user" component={Usuario} />
        <ProtectedRoutes exact path="/cart" component={Carrito} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
