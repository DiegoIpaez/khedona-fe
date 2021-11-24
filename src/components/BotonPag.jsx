import React from "react";

const BotonPag = ({ totPag, pagina, setPagina, limite = 4 }) => {
  let total = totPag;

  const nextPag = () => {
    if (total > pagina + limite) {
      setPagina(pagina + limite);
    }
  };

  const prevPag = () => {
    if (pagina > 0) {
      setPagina(pagina - limite);
    }
  };

  return (
    <>
      <button
        className="btn btn-outline-success"
        onClick={prevPag}
        disabled={pagina === 0 ? true : false}
      >
        {/* <i className="fa fa-chevron-left"></i> */}
        <span> left </span>
      </button>
      <button
        className="btn btn-outline-success ms-2"
        disabled={total - (pagina + limite) <= 0 ? true : false}
        onClick={nextPag}
      >
        {/* <i className="fa fa-chevron-right"></i> */}
        <span>right</span>
      </button>
    </>
  );
};

export default BotonPag;
