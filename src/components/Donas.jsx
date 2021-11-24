import React from "react";

const Donas = ({ productos }) => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {productos.map((producto) => (
          <div className="col" key={producto._id}>
            <div className="card h-100">
              <img
                src="https://www.dulcedona.com/wp-content/uploads/2020/10/choconew.jpg"
                className="card-img-top"
                alt={producto.nombre}
              />
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <strong>{producto.categoria.nombre}</strong>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Donas;
