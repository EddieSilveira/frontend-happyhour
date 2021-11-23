import React, { useState, useContext, useEffect } from "react";
import { ContainerListPedidos } from "./styles.js";
import { BACKEND } from "../../constants/index";
import CardPedidos from "../CardPedidos/CardPedidos";
import { AuthContext } from "../../contexts/auth";

const ListPedidos = () => {
  const [listaPedidos, setListaPedidos] = useState([]);
  const [titleList, setTitleList] = useState(true);
  const { objUsuarioAtivo } = useContext(AuthContext);

  async function loadPedidos() {
    const url = `${BACKEND}/pedidos`;
    const response = await fetch(url);
    const data = await response.json();
    if (objUsuarioAtivo.nivelAcesso < 999) {
      const pedidosFiltrados = data.filter(
        (item, index) => item.infoPedido.id === objUsuarioAtivo.id && item
      );
      setListaPedidos(pedidosFiltrados);
    } else {
      setTitleList(false);
      setListaPedidos(data);
    }
  }

  useEffect(() => {
    loadPedidos();
  }, []);

  return (
    <ContainerListPedidos>
      {titleList ? <h1>Pedidos do Cliente</h1> : ""}
      {listaPedidos.length > 0 &&
        listaPedidos.map((item, index) => {
          return <CardPedidos key={index} item={item} />;
        })}
      {!listaPedidos.length > 0 && <h4>Lista de Pedidos vazia.</h4>}
    </ContainerListPedidos>
  );
};

export default ListPedidos;
