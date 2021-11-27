import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getBuscar } from "../helpers/buscar";

const BusquedaProd = () => {
  const coleccion = ["productos"];

  const [buscador, setBuscador] = useState({
    datos: [],
    loading: false,
  });

  const [inputValue, setInputValue] = useState("");

  const changeInput = (e) => {
    setInputValue(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    if (inputValue.length > 3) {
      setBuscador({
        ...buscador,
        loading: true,
      });

      getBuscar(coleccion, inputValue).then((respuesta) => {
        setBuscador({
          datos: respuesta.results.productos,
          loading: false,
        });
      });
      setInputValue("");
    }
  };

  return (
    <div className="busquedaC">
      <form onSubmit={submitSearch}>
        <div className="form-group mb-1 row">
            <div className="col-6">
                <input
            type="text"
            className="form-control"
            placeholder="Arma tu caja..."
            value={inputValue}
            onChange={changeInput}
            maxLength={50}
            minLength={1}
          />
            </div>
            <div className="col-1">
                <button className="btn btn-search text-white"><i className="fas fa-search"></i></button>
            </div>
          
          
        </div>
      </form>

      {buscador.loading ? (
        <ul className="busquedaL">
          <li className="pt-2 pb-2 pe-5">
            <span className="pe-5">Cargando...</span>
          </li>
        </ul>
      ) : buscador.datos.length > 0 ? (
        <ul className="busquedaL">
          {buscador.datos.map((productoB) => (
            <li className="pe-5" key={productoB._id}>
              <Link className="nav-link" to={`/product/${productoB._id}`}>
                <h6 className="busqueda-nombre">{productoB.nombre}</h6>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="busquedaL">
          <li className="pt-2 pb-2 pe-4">
            {" "}
            <span>Producto no encontrado...</span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default BusquedaProd;
