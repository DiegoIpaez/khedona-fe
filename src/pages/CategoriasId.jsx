import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductoCateg } from "../helpers/productos";
import { getCategoriaId } from "../helpers/categorias";
import Donas from "../components/Donas";

const CategoriasId = () => {
  const { id } = useParams();

  const [categoriaId, setCategoriaId] = useState({
    datos: [],
    loading: true,
  });

  const [productos, setProductoC] = useState([]);

  useEffect(() => {
    getCategoriaId(id).then((res) => {
      setCategoriaId({
        datos: res.categoria,
        loading: false,
      });
    });
  }, [id]);

  useEffect(() => {
    getProductoCateg(id).then((res) => {
      setProductoC(res.productos);
    });
  }, [id]);

  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col mt-2 atajos-id">
          <span className="pe-4">
            <Link to="/" className="atajos-text">
              INICIO
            </Link>
          </span>
          <span>|</span>
          <span className="ps-4 pe-4 atajos-text">
            {categoriaId.datos.nombre}
          </span>
        </div>
      </div>

      <div className="row">
        <Donas productos={productos} />
      </div>
    </div>
  );
};

export default CategoriasId;
