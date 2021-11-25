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
      <div className="container">
        <div className="row">
          <div className="col-12  ">
            <div className=" text-center">
              <img
                src="http://morichile.cl/wp-content/uploads/2014/10/user77.png"
                alt="avatar"
                className="w-25"
              />
            </div>
            <div className=" text-center">
              <h1>Bienvenido/a, {datos.usuario.nombre}!</h1>
            </div>
          </div>
        </div>
        {/* Fin de 1er row */}
        <div className="row mt-5">
          <h3>Tus datos</h3>

          <div className="card ">
            <table className="table">
              <tbody className="text-center">
                <tr>
                  <th scope="row">Nombre</th>
                  <td>{datos.usuario.nombre}</td>
                </tr>
                <tr>
                  <th scope="row">Email</th>
                  <td>{datos.usuario.email}</td>
                </tr>
                <tr>
                  <th scope="row">Domicilio</th>
                  <td>
                    {datos.usuario.domicilio ? datos.usuario.domicilio : "-"}
                  </td>
                </tr>
                <tr>
                  <th scope="row">Usuario</th>
                  <td>
                    {datos.usuario.rol === "ADMIN_ROLE"
                      ? "Administrador"
                      : "Cliente"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* Fin row 2 */}
        <h3>Tus pedidos</h3>

				
				
      </div>
      {/* Fin de container */}
    </div> //fin de return
  );
};

export default Usuario;
