import React from "react";

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
      <div className="container mb-5">
        <div className="row mb-3 mt-3">
          <h1>Bienvenido/a, {datos.usuario.nombre}!</h1>
        </div>

        {/* Titulo tabla */}
        <h3>Tus datos:</h3>

        <div className="container">
          <div className="row">
            {/* Tus datos */}
            <div className="col-md-6 col-12">
              <div className="container">
                <div className="row appTabla mb-1 text-white">
                  <div className="col-3 pt-3 pb-3">Nombre</div>
                  <div className="col-3 pt-3 pb-3">Apellido</div>
                  <div className="col-3 pt-3 pb-3">Email</div>
                  <div className="col-3 pt-3 pb-3">Direccion</div>
                </div>
                {/* Fin de Titulo tabla*/}
                {/* ------------------------------ */}
                {/* Cuerpo tabla */}

                <div className="row">
                  <div className="col-md-3 col-2 mt-2">
                    {datos.usuario.nombre}
                  </div>
                  <div className="col-md-3 col-2 mt-2">
                    {datos.usuario.apellido}
                  </div>
                  <div className="col-md-3 col-2 mt-2">
                    {datos.usuario.email}
                  </div>
                  <div className="col-md-3 col-2 mt-2">
                    {datos.usuario.direccion ? datos.usuario.direccion : "-"}
                  </div>

                  <hr className="mt-3" />
                </div>

                {/* Fin de cuerpo tabla */}
              </div>
            </div>
            {/* Tus pedidos */}
            <div className="col-md-6 col-12"></div>
          </div>
        </div>
      </div>
      {/* Fin de container */}
    </div> //fin de return
  );
};

export default Usuario;
