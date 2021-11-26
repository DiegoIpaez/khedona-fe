import React, { useEffect, useState } from "react";
import { getPedidos } from "../helpers/pedidos";
import BotonPag from "./BotonPag";
import ModalPedidos from "../components/modals/ModalPedidos";

const AdminPedidos = () => {
  const [pedidos, setPedidos] = useState({
    datos: [],
    loading: true,
  });
  const [actualizar, setActualizar] = useState("");

  //Estados de la pagina
  const [pagina, setPagina] = useState(0);
  const [totPag, setTotPag] = useState(0);

  //Estados del modal
  const [show, setShow] = useState(false);

  useEffect(() => {
    getPedidos().then((respuesta) => {
      setPedidos({
        datos: respuesta.pedidos,
        loading: false,
      });
      setTotPag(respuesta.Total);
    });
  }, []);

  useEffect(() => {
    updateDatos(pagina);
  }, [pagina, show]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //-------------------------------------

  const updateDatos = (pag) => {
    getPedidos(pag).then((respuesta) => {
      setPedidos({
        datos: respuesta.pedidos,
        loading: false,
      });
    });
  };

  //-------------------------------------

  return (
    <div className="container">
      {" "}
      <div className="row">
        <h1>Pedidos</h1>
      </div>
      {/* Fin de Titulo */}
      {/* ------------------------------ */}
      {/* Titulo tabla */}
      <div className="row appTabla mb-1 text-white">
        <div className="col-5 pt-3 pb-3">Id</div>
        <div className="col-5 pt-3 pb-3">Usuario</div>
        <div className="col-2 mt-2 text-center">
          <button
            className="btn"
            onClick={() => {
              setActualizar("");
              handleShow();
            }}
          >
            <i className="fas fa-user-plus"></i>
          </button>
        </div>
      </div>
      {/* Fin de Titulo tabla*/}
      {/* ------------------------------ */}
      {/* Cuerpo tabla */}
      {pedidos.datos.map((pedido) => (
        <div className="row" key={pedido._id}>
          <div className="col-md-5 col-4 mt-2">{pedido._id}</div>
          <div className="col-md-5 col-6 mt-2">{pedido.usuario.email}</div>
          <div className="col-md-2 col-2 mt-1 text-center">
            <button
              className="btn btn-primary"
              onClick={() => {
                setActualizar(pedido._id);
                handleShow();
              }}
            >
              <i className="far fa-edit"></i>
            </button>
          </div>
          <hr className="mt-2" />
        </div>
      ))}
      {/* Fin de cuerpo tabla */}
      <div className="text-center">
        <BotonPag totPag={totPag} pagina={pagina} setPagina={setPagina} />
      </div>
      <ModalPedidos
        show={show}
        handleClose={handleClose}
        actualizar={actualizar}
      />
    </div>
  );
};

export default AdminPedidos;
