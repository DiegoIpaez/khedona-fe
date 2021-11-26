import React, { useEffect, useState } from "react";
import { getPedido, postPedido, putPedido } from "../../helpers/pedidos";
import { Modal, Button } from "react-bootstrap";

const ModalPedidos = ({ show, handleClose, actualizar }) => {
  const [loading, setLoading] = useState(false);

  const [formValue, setFormValue] = useState({
    productos: [{}],
    total: "",
    nota: "",
    realizado: false,
    fecha: "",
  });

  useEffect(() => {
    setFormValue({
      productos: [{}],
      total: "",
      nota: "",
      realizado: false,
      fecha: "",
    });
    if (actualizar) {
      getPedido(actualizar).then((respuesta) => {
        setFormValue({
          productos: respuesta.pedido.productos,
          total: respuesta.pedido.total,
          nota: respuesta.pedido.nota,
          realizado: respuesta.pedido.realizado,
          fecha: respuesta.pedido.fecha,
        });
      });
    }
  }, [actualizar]);

  const handleChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    if (actualizar) {
      putPedido(actualizar, formValue).then((respuesta) => {
        if (respuesta.errors) {
          setLoading(false);
          return window.alert(respuesta.errors[0].msg);
        }
        if (respuesta.msg) {
          window.alert(respuesta.msg);
        }
        setLoading(false);
        setFormValue({
          productos: [{}],
          total: "",
          nota: "",
          realizado: false,
          fecha: "",
        });
        handleClose();
      });
    } else {
      postPedido(formValue).then((respuesta) => {
        if (respuesta.errors) {
          setLoading(false);
          return window.alert(respuesta.errors[0].msg);
        }
        setLoading(false);

        setFormValue({
          productos: [{}],
          total: "",
          nota: "",
          realizado: false,
          fecha: "",
        });
        handleClose();
      });
    }
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header className="tituloModal" closeButton>
          <Modal.Title>
            {actualizar ? "Modificar estado del producto" : "Nuevo Pedido"}
          </Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <div className="form-group">
              <label>Productos</label>
              <input
                type="text"
                name="productos"
                className="form-control"
                placeholder=""
                required
                value={formValue.productos}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Total</label>
              <input
                type="number"
                name="total"
                className="form-control"
                value={formValue.total}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>fecha</label>
              <input
                type="text"
                name="fecha"
                className="form-control"
                value={formValue.fecha}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Descripción/Nota</label>
              <textarea
                type="text"
                name="nota"
                className="form-control"
                value={formValue.nota}
                onChange={handleChange}
              />
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={formValue.realizado}
                value={formValue.realizado}
                onChange={handleChange}
                name="realizado"
              />
              <label>Realizado</label>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="success" type="submit" disabled={loading}>
              Guardar cambios
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  );
};

export default ModalPedidos;
