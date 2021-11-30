import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategorias } from "../helpers/categorias";

const CategoriasHome = () => {
  const [categorias, setCategorias] = useState({
    datos: [],
    loading: true,
  });

  useEffect(() => {
    getCategorias().then((respuesta) => {
      setCategorias({
        datos: respuesta.categorias,
        loading: false,
      });
    });
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {categorias.datos.map((categoria) => (
        <div
          className="col-12 col-md-3 mt-4  imagen-work text-center"
          key={categoria._id}
        >
          <Link to={`product/${categoria._id}`}>
            <img
              src={
                categoria.img
                  ? categoria.img
                  : "https://www.dulcedona.com/wp-content/uploads/2020/10/choconew.jpg"
              }
              className="img-home"
              alt={categoria.nombre}
            />
            <h6 className="nombreP-home pt-2">{categoria.nombre}</h6>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CategoriasHome;
