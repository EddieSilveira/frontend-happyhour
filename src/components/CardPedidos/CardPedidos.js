import React from "react";
import {
  ContainerCardPedidos,
  ContainerDadosPessoais,
  ContainerEndereco,
  ContainerPedido,
} from "./styles";

const CardPedidos = ({ item }) => {
  let date = new Date(item.createdAt);

  return (
    <ContainerCardPedidos>
      <h2>Data do Pedido: {date.toLocaleDateString()}</h2>
      <ContainerDadosPessoais>
        <h4>Dados Pessoais Cliente</h4>
        <span>Nome: {item.infoPedido.nome}</span>
        <span>CPF: {item.infoPedido.cpf}</span>
        <span>Email: {item.infoPedido.email}</span>
        <span>Telefone: {item.infoPedido.telefone}</span>
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
        <h4>Valor do Pedido</h4>
        <span>R$&nbsp;{item.infoPedido.valorPedido.toFixed(2)}</span>
      </div>
    </ContainerCardPedidos>
  );
};

export default CardPedidos;
