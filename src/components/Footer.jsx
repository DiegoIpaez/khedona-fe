import React from "react";

const Footer = () => {
  return (
    <div>
      {/* Redes */}
      <section className="redes mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4 text-center text-white font-weight-bold">
              <h4>Podes seguirnos en:</h4>
            </div>

            <div className="col-3 col-md-2 text-center redes-items">
            <i className="fab fa-twitter"></i>
            </div>

            <div className="col-3 col-md-2 text-center redes-items">
            <i className="fab fa-facebook-f"></i>
            </div>

            <div className="col-3 col-md-2 text-center redes-items">
            <i className="fab fa-instagram"></i>
            </div>
            <div className="col-3 col-md-2 text-center redes-items">
            <i className="fab fa-whatsapp"></i>
            </div>
          </div>
        </div>
      </section>
      {/* Fin de redes*/}
      <div className="footer-wrap pb-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-12 col-md-1 mb-2 footer-items"></div>
            <div className="col-12 col-md-3 mb-2 footer-items">
              <b>
                Desarrollado por el grupo "FIVECODES", visitanos en nuestra web
                www.Fivecodes.com.ar
              </b>
            </div>

            <div className="col-12 col-md-4 mb-2 footer-items">
              <span>NOSOTROS</span>
            </div>

            <div className="col-12 col-md-3 mb-2 footer-items">
              <span>KHEDONA © 2019-2021</span>
            </div>
            <div className="col-12 col-md-1 mb-2 footer-items"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
