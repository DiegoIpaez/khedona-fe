import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Error404 = () => {
  return (
    <div className="container pb-5 mb-5">
      <div className="row text-center">
        <h2 className=" mt-4" style={{ fontWeight: "300" }}>
          Oooops.....Error
        </h2>

        <div className="col-12 ">
          <img
            src="https://khedonai9-06.netlify.app/img/404.png"
            style={{ width: "50%" }}
            alt=""
          />
        </div>
        <h3 className="mb-3" style={{ fontWeight: "300" }}>
          Lo sentimos, pero la página que buscaste no existe
        </h3>
        <p>
          Por favor verifique los datos de la direccion introducida e intentelo
          de nuevo o
        </p>
        <div>
          <Link to="/">
            <Button style={{ backgroundColor: "pink", border: "pink" }}>
              Volver a la pagina de inicio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error404;
