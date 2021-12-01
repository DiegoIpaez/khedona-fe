import React, { useEffect, useState } from "react";
import { getPedido, putPedido } from "../../helpers/pedidos";
import { Modal, Button } from "react-bootstrap";

const ModalPedidos = ({ show, handleClose, actualizar }) => {
  const [loading, setLoading] = useState(false);

  const [formValue, setFormValue] = useState({
    nota: "",
    realizado: false,
  });

  useEffect(() => {
    setFormValue({
      nota: "",
      realizado: false,
    });
    if (actualizar) {
      getPedido(actualizar).then((respuesta) => {
        setFormValue({
          nota: respuesta.pedido.nota,
          realizado: respuesta.pedido.realizado,
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
          nota: "",
          realizado: false,
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
            {actualizar ? "Modificar estado del producto" : ""}
          </Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <div className="form-group mb-2">
              <label>Descripción/Nota</label>
              <textarea
                type="text"
                name="nota"
                className="form-control"
                value={formValue.nota}
                onChange={handleChange}
                maxLength={200}
                minLength={10}
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
