import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CarritoContext from "./CarritoContext";

const Donas = ({ productos }) => {

  const { carrito, setCarrito } = useContext(CarritoContext);

  localStorage.setItem("cart", JSON.stringify(carrito));

  const guardarProducto = (producto) => {
    const object =
      carrito.productos && carrito.productos.find((x) => x.id === producto._id);

    if (object) {
      object.cantidad = object.cantidad + 1;
      object.subtotal = object.precio * object.cantidad;

      const prueba = carrito.productos.filter((x) => x.id !== producto._id);

      prueba.push(object);

      setCarrito({
        ...carrito,
        productos: prueba,
        total: carrito.total + 1,
        costo: carrito.costo + object.precio,
      });
    } else {
      const objetoProducto = {
        id: producto._id,
        nombre: producto.nombre,
        precio: producto.precio,
        subtotal: producto.precio,
        cantidad: 1,
      };
      const productoNuevo = carrito.productos.push(objetoProducto);

      setCarrito({
        ...carrito,
        productos: productoNuevo,
      });

      setCarrito({
        ...carrito,
        total: carrito.total + 1,
        costo: carrito.costo + objetoProducto.precio,
      });
    }
  };


  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {productos.map((producto) => (
          <div
            className="col-12 col-md-3 mt-4  imagen-work text-center"
            key={producto._id}
          >
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
            <button
              className="btn btn-compra ps-5 pe-5 mb-5"
              onClick={() => guardarProducto(producto)}
            >
              <i className="fas fa-shopping-cart"></i> AGREGAR
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Donas;
