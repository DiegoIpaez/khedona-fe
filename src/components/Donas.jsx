import React from "react";
import { Link } from "react-router-dom";

const Donas = ({ productos }) => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
      
        {productos.map((producto) => (
          <div className="col-12 col-md-3 mt-4  imagen-work text-center" key={producto._id}>
          <Link to={`product/${producto._id}`}>
          <img
            src={
              producto.img
                ? producto.img
                : "https://www.dulcedona.com/wp-content/uploads/2020/10/choconew.jpg"
            }
            className="img-home"
            alt={producto.nombre}
          />
          <h6 className="nombreP-home pt-2">{producto.nombre}</h6>
          </Link>
          
        </div>
        ))}
      </div>
    </>
  );
};

export default Donas;
