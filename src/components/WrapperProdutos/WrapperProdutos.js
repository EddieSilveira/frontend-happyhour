import React, { useState, useEffect } from "react";
import { ContainerProdutos, WrapperProdutosCategoria } from "./styles";
import Card from "../Card/Card";
import { BACKEND } from "../../constants";

const WrapperProdutos = ({ filtroPesquisa, categoria }) => {
  const [listaProdutos, setListaProdutos] = useState([]);
  let listaFiltradaCategoria = [];
  const url = `${BACKEND}/produtos`;
  console.log(categoria);
  function filtrarProdutos() {
    listaProdutos.forEach((produto) => {
      console.log(produto.categoria);
      if (produto.categoria.includes(categoria)) {
        if (filtroPesquisa) {
          if (
            produto.nome.toLowerCase().includes(filtroPesquisa) ||
            produto.categoria.toLowerCase().includes(filtroPesquisa)
          ) {
            listaFiltradaCategoria.push(produto);
            return listaFiltradaCategoria;
          }
        } else {
          listaFiltradaCategoria.push(produto);
          return listaFiltradaCategoria;
        }
      }
    });
  }
  filtrarProdutos();

  async function carregarProdutos() {
    const response = await fetch(url);
    const data = await response.json();
    setListaProdutos(data);
  }

  useEffect(() => {
    carregarProdutos();
    filtrarProdutos();
  }, []);

  return (
    <WrapperProdutosCategoria>
      <h2>{categoria}</h2>
      <ContainerProdutos>
        {listaFiltradaCategoria.map((item) => (
          <Card key={item._id} produto={item} />
        ))}
      </ContainerProdutos>
    </WrapperProdutosCategoria>
  );
};

export default WrapperProdutos;
