import React, { useState, useEffect, useContext } from "react";
import beerDefault from "../../assets/beer-default.png";
import { BACKEND } from "../../constants";
import ModalDetalhesProduto from "../ModalDetalhesProduto/ModalDetalhesProduto";
import {
  ContainerCard,
  ImageCard,
  ContainerDescriptionCard,
  ContainerButtonCard,
  ButtonCard,
} from "./styles.js";
import { IoBagRemove } from "react-icons/io5";
import { CartContext } from "../../contexts/cart";

const CardCarrinho = ({ produto }) => {
  const [isOpenDetalhes, setIsOpenDetalhes] = useState(false);
  const { removeFromCart } = useContext(CartContext);
  const [contadorQuantidade, setContadorQuantidade] = useState(
    produto[1].quantity
  );
  let formatoMoeda = {
    minimumFractionDigits: 2,
    style: "currency",
    currency: "BRL",
  };

  return (
    <>
      {produto && (
        <ContainerCard>
          <button
            className="btnRemoverProduto"
            onClick={() => {
              removeFromCart(produto);
            }}
          >
            <IoBagRemove size={28} />
          </button>
          <ImageCard
            src={
              produto
                ? `${BACKEND}/${produto[1].produto.foto.path}`
                    .replace("public\\", "files/")
                    .replace("uploads\\", "")
                : beerDefault
            }
            alt="imagem-detalhes-produtos"
          />
          <ContainerDescriptionCard>
            <span className="descricaoProduto">{produto[1].produto.nome} </span>
            <span className="descricaoProduto valorProduto">
              {produto[1].produto.valor.toLocaleString("pt-BR", formatoMoeda)}
            </span>
            <ContainerButtonCard>
              <ButtonCard
                onClick={() => {
                  if (contadorQuantidade > 0) {
                    produto[1].quantity -= 1;
                    setContadorQuantidade(contadorQuantidade - 1);
                  }
                  if (contadorQuantidade <= 0) {
                    removeFromCart(produto);
                  }
                }}
              >
                -
              </ButtonCard>
              <span>{contadorQuantidade}</span>
              <ButtonCard
                onClick={() => {
                  produto[1].quantity += 1;
                  setContadorQuantidade(contadorQuantidade + 1);
                }}
              >
                +
              </ButtonCard>
            </ContainerButtonCard>
          </ContainerDescriptionCard>
        </ContainerCard>
      )}

      <ModalDetalhesProduto
        produto={produto}
        isOpenDetalhes={isOpenDetalhes}
        setIsOpenDetalhes={setIsOpenDetalhes}
      />
    </>
  );
};

export default CardCarrinho;
