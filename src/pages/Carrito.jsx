import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { postPedido } from "../helpers/pedidos";
import CarritoContext from "../components/CarritoContext";
import Swal from "sweetalert2";

const Carrito = () => {
  const history = useHistory();
  const { carrito, setCarrito } = useContext(CarritoContext);

  localStorage.setItem("cart", JSON.stringify(carrito));

  const borrarProducto = (producto) => {
    let validar = window.confirm(
      `¿Desea eliminar ${producto.nombre} del carrito?`
    );
    if (validar) {
      const prueba = carrito.productos.filter((x) => x.id !== producto.id);

      setCarrito({
        ...carrito,
        productos: prueba,
        total: carrito.total - producto.cantidad,
        costo: carrito.costo - producto.precio * producto.cantidad,
      });
    }
  };

  const restarProducto = (producto) => {
    const pedido = carrito.productos.map(function (dato) {
      if (dato.id === producto.id) {
        dato.cantidad = dato.cantidad - 1;
        dato.subtotal = dato.precio * dato.cantidad;
      }

      return dato;
    });

    let sumaSubtotales = 0;
    for (let i = 0; i < pedido.length; i++) {
      sumaSubtotales += pedido[i].subtotal;
    }

    setCarrito({
      ...carrito,
      productos: pedido,
      total: carrito.total - 1,
      costo: sumaSubtotales,
    });
  };

  const sumarProducto = (producto) => {
    const pedido = carrito.productos.map(function (dato) {
      if (dato.id === producto.id) {
        dato.cantidad = dato.cantidad + 1;
        dato.subtotal = dato.precio * dato.cantidad;
      }

      return dato;
    });

    let sumaSubtotales = 0;
    for (let i = 0; i < pedido.length; i++) {
      sumaSubtotales += pedido[i].subtotal;
    }

    setCarrito({
      ...carrito,
      productos: pedido,
      total: carrito.total + 1,
      costo: sumaSubtotales,
    });
  };

  const disableButton = (producto) => {
    if (producto.cantidad > 1) {
      return false;
    } else {
      return true;
    }
  };

  const crearPedido = () => {
    if (JSON.parse(localStorage.getItem("auth"))) {
      let validarPedido = window.confirm(`¿Desea realizar el pedido?`);
      if (validarPedido) {
        postPedido(carrito).then((respuesta) => {
          if (respuesta.errors) {
            return window.alert(respuesta.errors[0].msg);
          }
          Swal.fire({
            icon: "success",
            title: "Muchas gracias!",
            text: "Tu pedido se ha realizado con éxito!",
          });
          setTimeout(() => {
            history.push("/user");
          }, 1000);

          setCarrito({
            ...carrito,
          });
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debes loguearte para realizar el pedido",
      });
      setTimeout(() => {
        history.push("/login");
      }, 1000);
    }
  };

  return (
    <>
      {carrito.total === 0 ? (
        <div className="container mt-5 mb-5">
          <div className="row">
            <div className="col text-center">
              <img
                src="https://www.editorialparalelo28.com/images/cartEmpty.png"
                className="w-25"
                alt="carrito vacío"
              />
              <h1 className="mt-3 mb-4">Tu carrito esta vacio</h1>
              <Link to="/">
                <button className="btn seguir-comprandoBlock ">
                  <h4>
                    Seguir comprando <i className="fas fa-arrow-right"></i>
                  </h4>
                </button>
              </Link>
            </div>
            <div className="row mb-5 pb-5"></div>
          </div>
        </div>
      ) : (
        <div className="container mb-5 pb-5 mt-5">
          <div className="row title-cart pt-2 pb-2 text-center text-white">
            <div className="col-3">Nombre</div>
            <div className="col-3">Precio</div>
            <div className="col-3">Cantidad</div>
            <div className="col-3"></div>
          </div>
          {carrito.productos.map((producto) => (
            <div className="row text-center pt-3" key={producto.id}>
              <div className="col-3">{producto.nombre}</div>
              <div className="col-3">
                {"$"}
                {producto.precio}
              </div>
              <div className="col-1">
                <button
                  className="py-0 px-1 btn btn-cart-plus boton-carrito"
                  onClick={() => restarProducto(producto)}
                  disabled={disableButton(producto)}
                >
                  -
                </button>
              </div>
              <div className="col-1">{producto.cantidad}</div>
              <div className="col-1">
                <button
                  className="btn btn-cart-plus py-0 px-1 boton-carrito "
                  onClick={() => sumarProducto(producto)}
                >
                  +
                </button>
              </div>
              <div className="col-3"><button
                            className="btn btn-danger ms-2 "
                            onClick={() => borrarProducto(producto)}
                          >
                            <i className="fas fa-trash-alt"></i>
                          </button></div>
              <hr className="mt-3" />
            </div>
          ))}
          <div className="row text-center px-0">
            <div className="col-12 col-md-6 mb-2 mt-3">
              {" "}
              <h2>
                Total: {"$"}
                {carrito.costo}
              </h2>
            </div>
            <div className="col-12 col-md-6 mb-3">
              {" "}
              <button className="btn btn-cart-pedido" onClick={crearPedido}>
                <h5 className="text-white mt-1">Realizar Pedido</h5>
              </button>
              <Link to="/">
                <button className="btn">
                  <p className="nav-link mt-2 seguir-comprando">
                    Seguir comprando <i className="fas fa-arrow-right"></i>
                  </p>
                </button>
              </Link>
            </div>
            <hr />
          </div>

          <div className="row mb-5 pb-5"></div>
        </div>
      )}
    </>
  );
};

export default Carrito;
