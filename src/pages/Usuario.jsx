import React, { useState, useEffect } from "react";
import { getPedidosUser } from "../helpers/pedidos";
import ModalDetalle from "../components/modals/ModalDetalle";

const Usuario = () => {
  const datos = JSON.parse(localStorage.getItem("auth"));
  const [pedidos, setPedidos] = useState([]);
  const [detalle, setDetalle] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    getPedidosUser(datos.usuario.uid).then((respuesta) => {
      setPedidos(respuesta.pedidos);
    });
  }, [datos.usuario.uid]);

  if (!datos) {
    return (
      <div>
        <h1>Usuario no logueado</h1>
      </div>
    );
  }

  return (
    <div>
      <div className="container mb-5">
        <div className="row mb-3 mt-3">
          <h1 className="text-center" style={{ color: "#c845a1" }}>
            Bienvenido/a, {datos.usuario.nombre}!
          </h1>
        </div>

        <div className="container mb-5">
          <div className="row">
            <div className="col-xl-2 col-lg-12 col-md-12 col-12"></div>
            {/* Tus datos */}
            <div className="col-xl-8 col-lg-12 col-md-12 col-12">
              <div className="container">
                <div className="row appTabla mb-1 text-white">
                  <div className="col pt-3 pb-3">Mis datos:</div>
                </div>
                {/* Fin de Titulo tabla*/}
                {/* ------------------------------ */}
                {/* Cuerpo tabla */}

                <div className="row">
                  <div className="col-md-6 col-4 mt-2">Nombre y apellido</div>
                  <div className="col-md-6 col-4 mt-2">
                    {datos.usuario.nombre} {datos.usuario.apellido}
                  </div>
                  <hr className="mt-3" />
                </div>
                {/* email */}
                <div className="row">
                  <div className="col-md-6 col-4 mt-2">Email</div>
                  <div className="col-md-6 col-4 mt-2">
                    {datos.usuario.email}
                  </div>
                  <hr className="mt-3" />
                </div>
                {/* Direccio */}
                <div className="row">
                  <div className="col-md-6 col-4 mt-2">Direccion</div>
                  <div className="col-md-6 col-4 mt-2">
                    {datos.usuario.direccion ? datos.usuario.direccion : "-"}
                  </div>
                  <hr className="mt-3" />
                </div>

                {/* Fin de cuerpo tabla */}
              </div>
            </div>
            <div className="col-xl-2 col-lg-12 col-md-12 col-12"></div>
          </div>
        </div>
        {/* 2DO CONTAINER */}
        <div className="container pb-5 pt-4">
          <div className="row">
            <div className="col-12">
              <div className="container">
                <div className="row appTabla mb-1 text-white">
                  <div className="col pt-3 pb-3">Mis Pedidos:</div>
                </div>
                {/* Fin de Titulo tabla*/}
                {/* ------------------------------ */}
                {/* Cuerpo tabla */}
                {pedidos.map((pedido) => (
                  <div key={pedido._id}>
                    <div className="row">
                      <div className="col-md-4 pt-2 col-12 mt-2">
                        Numero de pedido: {pedido._id}
                      </div>
                      <div className="col-md-4 pt-2 col-12 mt-2">
                        Fecha: {pedido.fecha}
                      </div>
                      <div className="col-md-2 pt-2 col-12 mt-2">
                        Precio Final: {"$"}
                        {pedido.costo}
                      </div>
                      <div className="col-md-1 col-6 mt-2">
                        <button
                          className="btn btn-black"
                          onClick={async () => {
                            await setDetalle(pedido.productos);
                            handleShow();
                          }}
                        >
                          <i className="fas fa-info-circle"></i>
                        </button>
                      </div>
                      <div className="col-md-1 col-6 pt-2 mt-2">
                        {pedido.realizado ? (
                          <i
                            className="fas fa-check-square"
                            style={{ color: "green" }}
                          ></i>
                        ) : (
                          <i
                            className="fas fa-times-circle"
                            style={{ color: "red" }}
                          ></i>
                        )}
                      </div>
                      <hr className="mt-3" />
                    </div>
                  </div>
                ))}

                {/* Fin de cuerpo tabla */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fin de container */}
      <ModalDetalle show={show} handleClose={handleClose} detalle={detalle} />
    </div> //fin de return
  );
};

export default Usuario;
