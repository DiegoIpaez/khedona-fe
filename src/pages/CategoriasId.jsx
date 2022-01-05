import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
      <h3 className="mt-4" style={{ color: "rgb(230, 4, 181)" }}>CATEGORIAS | {categoriaId.datos.nombre}</h3>
      <hr />

      <div className="row">
        <Donas productos={productos} />
      </div>
    </div>
  );
};

export default CategoriasId;
