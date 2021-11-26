import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getProducto } from "../helpers/productos";

const ProductosId = () => {
  const { id } = useParams();

  const [producto, setProducto] = useState({
    datos: {},
    loading: true,
  });

  useEffect(() => {
    getProducto(id).then((respuesta) => {
      setProducto({
        datos: respuesta.producto,
        loading: false,
      });
    });
  }, [id]);

  return (
    <div className="container">
      {" "}
      <div className="row mb-4">
        <div className="col mt-2 atajos-id">
          <span className="pe-4">
            <Link to="/" className="atajos-text">
              INICIO
            </Link>
          </span>
          <span>|</span>
          <span className="ps-4 pe-4">
            <Link to="/ola" className="atajos-text">
              CATEGORIA
            </Link>
          </span>
          <span>|</span>
          <span className="ps-4 pe-4 atajos-text">{producto.datos.nombre}</span>
        </div>
      </div>
      {/*  */}
      <div className="row">
        <div className="col-md-8 col-lg-6 col-12 ">
          <div className="col">
            <img
              className="img-id mb-4 pt-4 pb-4 ms-4"
              src={
                producto.datos.img
                  ? producto.datos.img
                  : "https://www.dulcedona.com/wp-content/uploads/2020/10/choconew.jpg"
              }
              alt=""
            />
          </div>
        </div>
        <div className="col-md-4 col-lg-6 col-12">
          <div className="container">
            <div className="row">
              <div className="col">
                <h3 className="mb-3">{producto.datos.nombre}</h3>
                <span className="codigo-product">
                  Código de producto: {producto.datos._id}
                </span>
                <hr />
                <span>Precio por unidad</span>
                <h1 className="precio-producto2 mt-1 mb-4">
                  $ {producto.datos.precio}
                </h1>
                {producto.datos.disponible ? (
                  <button className="btn btn-compra ps-5 pe-5 mb-5">
                    <i className="fas fa-shopping-cart"></i> AGREGAR
                  </button>
                ) : (
                  <button className="btn btn-secondary ps-5 pe-5 mb-5">
                    <i className="fas fa-shopping-cart"></i> AGREGAR
                  </button>
                )}

                <Link to="/">
                  <button className="btn btn-volver ms-2 mb-5">VOLVER</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
       
      </div>
      {/*  */}
    </div>
  );
};

export default ProductosId;
