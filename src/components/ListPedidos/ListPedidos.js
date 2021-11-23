import React, { useState, useContext, useEffect } from "react";
import { ContainerListPedidos } from "./styles.js";
import { BACKEND } from "../../constants/index";
import CardPedidos from "../CardPedidos/CardPedidos";
import { AuthContext } from "../../contexts/auth";

const ListPedidos = () => {
  const [listaPedidos, setListaPedidos] = useState([]);
  const { objUsuarioAtivo } = useContext(AuthContext);

  async function loadPedidos() {
    const url = `${BACKEND}/pedidos`;
    const response = await fetch(url);
    const data = await response.json();
    const pedidosFiltrados = data.filter(
      (item, index) => item.infoPedido.id === objUsuarioAtivo.id && item
    );

    setListaPedidos(pedidosFiltrados);
  }

  useEffect(() => {
    loadPedidos();
  }, []);

  return (
    <ContainerListPedidos>
      <h1>Pedidos do Cliente</h1>
      {listaPedidos.length > 0 &&
        listaPedidos.map((item, index) => {
          return <CardPedidos key={index} item={item} />;
        })}
      {!listaPedidos.length > 0 && <h4>Lista de Pedidos vazia.</h4>}
    </ContainerListPedidos>
  );
};

export default ListPedidos;
