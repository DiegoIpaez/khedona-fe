import React from "react";
import { Modal, Button } from "react-bootstrap";

const ModalDetalle = ({ show, handleClose, detalle }) => {
  return (
    <div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header className="tituloModal">
          <Modal.Title>
            <h1 className="text-white">Detalle de compra</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
              <div className="row mb-2" style={{ color: 'pink' }}>
                  <div className="col-4">Nombre</div>
                  <div className="col-2">Precio</div>
                  <div className="col-3">Cantidad</div>
                  <div className="col-3">Subtotal</div>
              </div>
            {detalle.map((pedido) => (
              <div key={pedido._id}>
                <div className="row" >
                  <div className="col-4">{pedido.nombre}</div>
                  <div className="col-3">{"$"}{pedido.precio}</div>
                  <div className="col-2">{pedido.cantidad}x</div>
                  <div className="col-3">{"$"}{pedido.subtotal}</div>
                  <hr className="mt-3"/>
                </div>
              </div>
            ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
        <Button className="btn btn-danger" onClick={handleClose}>
          Cerrar
        </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalDetalle;
