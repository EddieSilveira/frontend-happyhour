import React, { useState, useEffect } from "react";
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

const CardCarrinho = ({ produto }) => {
  const [isOpenDetalhes, setIsOpenDetalhes] = useState(false);
  const [contadorQuantidade, setContadorQuantidade] = useState(
    produto[1].quantity
  );
  console.log(produto[1].produto.foto.path);

  return (
    <>
      {produto && (
        <ContainerCard>
          <button className="btnRemoverProduto">
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
              R$ {produto[1].produto.valor}
            </span>
            <span className="descricaoProduto"> por unidade</span>
            <ContainerButtonCard>
              <ButtonCard
                onClick={() => {
                  setIsOpenDetalhes(true);
                  if (contadorQuantidade >= 1)
                    setContadorQuantidade(contadorQuantidade - 1);
                }}
              >
                -
              </ButtonCard>
              <span>{contadorQuantidade}</span>
              <ButtonCard
                onClick={() => {
                  setIsOpenDetalhes(true);
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
