import React, { useEffect, useState } from "react";
import { getPedidos } from "../helpers/pedidos";
import BotonPag from "./BotonPag";
import ModalPedidos from "../components/modals/ModalPedidos";
import ModalDetalle from "../components/modals/ModalDetalle";

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
  const [show1, setShow1] = useState(false);
  const [detalle, setDetalle] = useState([]);

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

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
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
        <div className="col-4 pt-3 pb-3">Id</div>
        <div className="col-4 pt-3 pb-3">Usuario</div>
        <div className="col-4 pt-3 pb-3">Total</div>
      </div>
      {/* Fin de Titulo tabla*/}
      {/* ------------------------------ */}
      {/* Cuerpo tabla */}
      {pedidos.datos.map((pedido) => (
        <div className="row" key={pedido._id}>
          <div className="col-lg-4 col-md-4 col-12 mt-2">{pedido._id}</div>
          <div className="col-lg-4 col-md-4 col-12 mt-2">
            {pedido.usuario.email}
          </div>
          <div className="col-lg-1 col-md-1 col-8 mt-1">{"$"}{pedido.costo}</div>
          <div className="col-lg-1 col-md-1 col-2 mt-1 text-center">
            <button
              className="btn btn-primary"
              onClick={() => {
                setActualizar(pedido._id);
                handleShow1();
              }}
            >
              <i className="far fa-edit"></i>
            </button>
          </div>
          <div className="col-lg-2 col-md-2 col-2 mt-1 text-center">
            <button
              className="btn btn-dark"
              onClick={async () => {
                await setDetalle(pedido.productos);
                handleShow();
              }}
            >
              <i className="fas fa-info-circle"></i>
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
        show={show1}
        handleClose={handleClose1}
        actualizar={actualizar}
      />
      <ModalDetalle show={show} handleClose={handleClose} detalle={detalle} />
    </div>
  );
};

export default AdminPedidos;
