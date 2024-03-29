import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

import {
  getProducto,
  postProducto,
  putProducto,
} from "../../helpers/productos";
import { getCategorias } from "../../helpers/categorias";

const ModalProd = ({ show, handleClose, actualizar }) => {
  const [loading, setLoading] = useState(false);
  const [categorias, setCategorias] = useState([]);
  const [formValue, setFormValue] = useState({
    nombre: "",
    precio: "",
    img: "",
    detalle: "",
    categoria: "",
    disponible: true,
  });

  useEffect(() => {
    getCategorias().then((respuesta) => {
      setCategorias(respuesta.categorias);
    });
  }, []);

  useEffect(() => {
    setFormValue({
      nombre: "",
      precio: "",
      img: "",
      detalle: "",
      categoria: "",
      disponible: true,
    });
    if (actualizar) {
      getProducto(actualizar).then((respuesta) => {
        setFormValue({
          nombre: respuesta.producto.nombre,
          precio: respuesta.producto.precio,
          img: respuesta.producto.img,
          detalle: respuesta.producto.detalle,
          categoria: respuesta.producto.categoria._id,
          disponible: respuesta.producto.disponible,
        });
      });
    }
  }, [actualizar]);

  const handleChange = ({ target }) => {
    if (target.name === "disponible") {
      setFormValue({
        ...formValue,
        [target.name]: target.checked,
      });
    } else {
      setFormValue({
        ...formValue,
        [target.name]: target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    if (actualizar) {
      putProducto(actualizar, formValue).then((respuesta) => {
        if (respuesta.errors) {
          setLoading(false);
          return window.alert(respuesta.errors[0].msg);
        }
        if (respuesta.msg) {
          window.alert(respuesta.msg);
        }
        setLoading(false);
        setFormValue({
          nombre: "",
          precio: "",
          img: "",
          detalle: "",
          categoria: "",
          disponible: true,
        });
        handleClose();
      });
    } else {
      postProducto(formValue).then((respuesta) => {
        if (respuesta.errors) {
          setLoading(false);
          return window.alert(respuesta.errors[0].msg);
        }
        if (respuesta.msg) {
          window.alert(respuesta.msg);
        }
        setLoading(false);
        setFormValue({
          nombre: "",
          precio: "",
          img: "",
          detalle: "",
          categoria: "",
          disponible: true,
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
            {actualizar ? "Modificar producto" : "Nuevo producto"}
          </Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit}>
          <Modal.Body>
            <div className="form-group">
              <label>Nombre</label>
              <input
                type="text"
                name="nombre"
                className="form-control"
                placeholder="Ej: Café Torrado"
                required
                value={formValue.nombre}
                onChange={handleChange}
                maxLength={20}
                minLength={3}
              />
            </div>
            <div className="form-group">
              <label>Precio</label>
              <input
                type="number"
                name="precio"
                className="form-control"
                value={formValue.precio}
                onChange={handleChange}
                maxLength={20}
                minLength={1}
              />
            </div>
            <div className="form-group">
              <label>Imagen(Url)</label>
              <input
                type="text"
                name="img"
                className="form-control"
                value={formValue.img}
                onChange={handleChange}
                maxLength={700}
                minLength={1}
              />
            </div>
            <div className="form-group">
              <label>Descripción</label>
              <textarea
                type="text"
                name="detalle"
                className="form-control"
                value={formValue.detalle}
                onChange={handleChange}
                maxLength={300}
                minLength={3}
              />
            </div>
            <div className="form-group">
              <label>Categorias</label>
              <select
                className="form-select"
                name="categoria"
                value={formValue.categoria}
                onChange={handleChange}
                required
              >
                <option defaultValue="">Elige una categoria</option>
                {categorias.map((categoria) => (
                  <option key={categoria._id} value={categoria._id}>
                    {categoria.nombre}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={formValue.disponible}
                value={formValue.disponible}
                onChange={handleChange}
                name="disponible"
              />
              <label>Disponible</label>
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

export default ModalProd;
