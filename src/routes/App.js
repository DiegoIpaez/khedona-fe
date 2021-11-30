import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Navbarjsx from "../components/Navbar";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Admin from "../pages/Admin";
import Usuario from "../pages/Usuario";
import ProductosId from "../pages/ProductosId";
import Carrito from "../pages/Carrito";
import ProtectedRoutes from "../helpers/ProtectedRoutes";
import Error404 from "../pages/Error404";
import CarritoContext from "../components/CarritoContext";
import TiendaContext from "../components/TiendaContext";


function App() {
  const changuito = JSON.parse(localStorage.getItem("cart")) || {
    total: 0,
    costo: 0,
    productos: [],
  };

  const [carrito, setCarrito] = useState(changuito);
  const [tienda, setTienda] = useState("todo");

  return (
    <CarritoContext.Provider value={{ carrito, setCarrito }}>
      <TiendaContext.Provider value={{ tienda, setTienda }}>
        <Router>
          <Navbarjsx />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/product/:id" component={ProductosId} />
            <ProtectedRoutes exact path="/admin" component={Admin} />
            <ProtectedRoutes exact path="/user" component={Usuario} />
            <Route exact path="/cart" component={Carrito} />
            <Route component={Error404} />
          </Switch>
          <Footer />
        </Router>
      </TiendaContext.Provider>
    </CarritoContext.Provider>
  );
}

export default App;
