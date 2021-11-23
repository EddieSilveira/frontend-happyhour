import React from "react";
import {
  ContainerCardPedidos,
  ContainerDadosPessoais,
  ContainerEndereco,
  ContainerPedido,
} from "./styles";

const CardPedidos = ({ item }) => {
  let date = new Date(item.createdAt);

  function formataTelefone(tel) {
    const parte1 = tel.slice(0, 5);
    const parte2 = tel.slice(5, 9);
    const telAjustado = `${parte1}-${parte2}`;
    return telAjustado;
  }

  return (
    <ContainerCardPedidos>
      <h2>Data do Pedido: {date.toLocaleDateString()}</h2>
      <ContainerDadosPessoais>
        <h4>Dados Pessoais Cliente</h4>
        <span>Nome: {item.infoPedido.nome}</span>
        <span>
          CPF:{" "}
          {item.infoPedido.cpf.replace(
            /(\d{3})(\d{3})(\d{3})(\d{2})/g,
            "$1.$2.$3-$4"
          )}
        </span>
        <span>Email: {item.infoPedido.email}</span>
        <span>Telefone: {formataTelefone(item.infoPedido.telefone)}</span>
      </ContainerDadosPessoais>
      <ContainerEndereco>
        <h4>Endereço Cliente</h4>
        <span>Rua: {item.infoPedido.rua}</span>
        <span>Número: {item.infoPedido.numero}</span>
        <span>Bairro: {item.infoPedido.bairro}</span>
        <span>Cidade: {item.infoPedido.cidade}</span>
      </ContainerEndereco>
      <div
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          marginTop: "8px",
        }}
      >
        <h4>Lista de Produtos</h4>
        {item.produtos.map((item, index) => {
          return (
            <ContainerPedido key={index}>
              &nbsp;
              <span>Código do Produto: {item[0]}</span>
              <span>Nome do Produto: {item[1].produto.nome}</span>
              <span>Quantidade: {item[1].quantity}</span>
              <span>
                Valor do Produto: R$&nbsp;{item[1].produto.valor.toFixed(2)}
              </span>
            </ContainerPedido>
          );
        })}
        &nbsp;
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <h4>Valor do Pedido</h4>
          <h4>R$&nbsp;{item.infoPedido.valorPedido.toFixed(2)}</h4>
        </div>
      </div>
    </ContainerCardPedidos>
  );
};

export default CardPedidos;
