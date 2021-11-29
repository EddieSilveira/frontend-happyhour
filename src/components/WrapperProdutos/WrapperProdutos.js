import React, { useState, useEffect } from "react";
import { WrapperProdutosCategoria } from "./styles";
import Card from "../Card/Card";
import { BACKEND } from "../../constants";

const WrapperProdutos = ({ categoria }) => {
  const [listaProdutos, setListaProdutos] = useState([]);
  let listaFiltradaCategoria = [];
  const url = `${BACKEND}/produtos`;

  function filtrarCategoria() {
    listaProdutos.forEach((item) => {
      if (item.categoria === categoria) {
        listaFiltradaCategoria.push(item);
        return listaFiltradaCategoria;
      }
    });
  }
  filtrarCategoria();

  async function carregarProdutos() {
    const response = await fetch(url);
    const data = await response.json();
    setListaProdutos(data);
  }

  useEffect(() => {
    carregarProdutos();
    filtrarCategoria();
  }, []);

  return (
    <WrapperProdutosCategoria>
      <h2>{categoria}</h2>
      {listaFiltradaCategoria.map((item) => (
        <Card key={item._id} produto={item} />
      ))}
    </WrapperProdutosCategoria>
  );
};

export default WrapperProdutos;
