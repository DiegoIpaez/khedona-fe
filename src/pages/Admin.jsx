import React, { useEffect, useState } from "react";
import AdminUser from "../components/AdminUser";
import AdminCateg from "../components/AdminCateg";
import AdminProd from "../components/AdminProd";
import AdminPedidos from "../components/AdminPedidos";

const Admin = () => {
  const [state, setState] = useState({ rol: "" });

  useEffect(() => {
    const datos = JSON.parse(localStorage.getItem("auth"));
    setState(datos.usuario);
  }, [state.rol]);

  if (state.rol !== "ADMIN_ROLE") {
    return (
      <div className="container-fluid mt-5 mb-5 pb-5 pt-5">
        <div className="container-fluid mt-5 mb-5 pb-5 "></div>
        <div className="alert alert-danger text-center mt-5  mb-5" role="alert">
          Usuario no autorizado...
        </div>
        <div className="container-fluid mt-5 mb-5 pb-5 pt-5"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-xl-6 col-md-12 mt-5 mb-4 col-12">
            <AdminUser />
          </div>
          <div className="col-lg-12 col-xl-6 col-md-12 mt-5 mb-4 col-12">
            <AdminPedidos />
          </div>
        </div>
        {/* User y pedidos */}
        <div className="row">
          <div className="col-lg-12 col-xl-6 col-md-12 mt-5 mb-4 col-12">
            <AdminCateg />
          </div>
        </div>
        {/* Categorias */}
        <div className="row">
          <div className="col-md-12 col-12 mt-5">
            <AdminProd />
          </div>
        </div>
        {/* Productos */}
      </div>
    </div>
  );
};

export default Admin;
