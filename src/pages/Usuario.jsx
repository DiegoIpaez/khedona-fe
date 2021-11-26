import React from "react";
import {Form} from 'react-bootstrap'

const Usuario = () => {
  const datos = JSON.parse(localStorage.getItem("auth"));


  if (!datos) {
    return (
      <div>
        <h1>Usuario no logueado</h1>
      </div>
    );
  }
  return (
    <div>
      <div className="container">
      <Form>
        <h3 className="text-center pb-2">Datos personales</h3>
        <hr />
        <div className="row">
          <div className="col">
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="name" placeholder={datos.usuario.nombre} />
            </Form.Group>
          </div>
          <div className="col">
            {" "}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Apellido</Form.Label>
              <Form.Control type="name" />
            </Form.Group>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-md-4">
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Fecha de Nac.</Form.Label>
              <Form.Control type="password" placeholder="13/06/2000" />
            </Form.Group>
          </div>
          <div className="col-md-4">
            <Form.Group className="mb-3" controlId="formBasic1">
              <Form.Label>Cod. area</Form.Label>
              <Form.Control type="number" placeholder="3000" />
            </Form.Group>
          </div>
          <div className="col-md-4">
            <Form.Group className="mb-3" controlId="formBasic2">
              <Form.Label>Telefono</Form.Label>
              <Form.Control type="phone" placeholder="3816136233" />
            </Form.Group>
          </div>
        </div> */}
        {/* <div className="row">
          <div className="col-md-6">
            <Form.Group className="mb-3" controlId="formBasic3">
              <Form.Label>Tipo de Documento</Form.Label>
              <Form.Control type="text" placeholder="DNI.." />
            </Form.Group>
          </div>
          <div className="col-md-6">
            <Form.Group className="mb-3" controlId="formBasic4">
              <Form.Label>Documento</Form.Label>
              <Form.Control type="text" placeholder="42156746" />
            </Form.Group>
          </div>
        </div> */}

        <Form.Group className="mb-3" controlId="formBasic5">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder={datos.usuario.email} />
        </Form.Group>

        {/* llamar boton en los imports */}
        {/* <div className="row text-center mt-3">
          <div className="col-md-6">
            <Button variant="" type="submit">
              Cancelar
            </Button>
          </div>
          <div className="col-md-6">
            <Button variant="primary" type="submit">
              Guardar
            </Button>
          </div>
        </div> */}
      </Form>
				
      </div>
      {/* Fin de container */}
    </div> //fin de return
  );
};

export default Usuario;
