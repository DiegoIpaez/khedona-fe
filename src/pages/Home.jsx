import React, { useEffect, useState } from "react";
import { getProductos } from "../helpers/productos";

import Carrusel from "../components/Carrusel";
import Donas from "../components/Donas";
import BotonPag from "../components/BotonPag";

const Home = () => {
  const [productos, setProductos] = useState([]);
  const [pagina, setPagina] = useState(0);
  const [totPag, setTotpag] = useState(0);

  useEffect(() => {
    getProductos().then((respuesta) => {
      setProductos(respuesta.productos);
      setTotpag(respuesta.Total);
    });
  }, []);

  useEffect(() => {
    getProductos(pagina).then((respuesta) => {
      setProductos(respuesta.productos);
    });
  }, [pagina]);

  console.log(productos)

  return (
    <>
      <Carrusel />
      <div className="container mt-5 mb-5">
        <div>
          <Donas productos={productos} />
        </div>
        <div className="d-flex justify-content-center my-3">
         <BotonPag pagina={pagina} totPag={totPag} setPagina={setPagina} />
        </div>
      </div>
    </>
  );
};

export default Home;