import React, { useState, useContext } from "react";
import beerDefault from "../../assets/beer-default.png";
import { AuthContext } from "../../contexts/auth";
import { CartContext } from "../../contexts/cart";
import { useHistory } from "react-router-dom";
import Modal from "react-modal";
import { IoClose, IoSave } from "react-icons/io5";
import {
  WrapperHeadModal,
  ContainerPrincipal,
  WrapperCoreDetalhes,
  Column,
  WrapperQuantidade,
  WrapperDetalhes,
  WrapperButtonDetalhes,
  WrapperDescricaoDetalhes,
} from "./styles.js";
import { BACKEND } from "../../constants";
Modal.setAppElement("#root");
let formatoMoeda = {
  minimumFractionDigits: 2,
  style: "currency",
  currency: "BRL",
};

const ModalDetalhesProduto = ({
  isOpenDetalhes,
  setIsOpenDetalhes,
  handleOpenModal,
  handleCloseModal,
  record,
  loadData,
  produto,
}) => {
  const [contadorQuantidade, setContadorQuantidade] = useState(1);
  const { cart, addToCart } = useContext(CartContext);
  const { getCookie } = useContext(AuthContext);
  const history = useHistory();
  const token = getCookie("token");

  const customStyles = {
    content: {
      width: "50%",
      height: "500px",
      minWidth: "40%",
      minHeight: "40%",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  function addProduct() {
    const product = {
      quantidade: contadorQuantidade,
      produto,
    };
    addToCart(product);
    setIsOpenDetalhes(false);
    setContadorQuantidade(0);
  }
  if (produto) {
    return (
      <>
        {produto && (
          <Modal
            isOpen={isOpenDetalhes}
            onRequestClose={handleCloseModal}
            style={customStyles}
          >
            <WrapperHeadModal>
              <h2>Detalhes</h2>
              <button onClick={() => setIsOpenDetalhes(false)}>
                <IoClose size={18} />
              </button>
            </WrapperHeadModal>
            {produto && (
              <ContainerPrincipal>
                <WrapperCoreDetalhes>
                  <h1>{produto.nome}</h1>
                  {produto && <h2>{produto.valor}</h2>}
                  <WrapperDetalhes>
                    <Column>
                      <h2>Categoria</h2>
                      <span>{produto && produto.categoria}</span>
                    </Column>
                    <Column>
                      <h2>Volume</h2>
                      <span>{produto && produto.volume}</span>
                    </Column>
                    <Column>
                      <h2>Teor Alco??lico</h2>
                      <span>{produto && produto.teor}%</span>
                    </Column>
                    <WrapperDescricaoDetalhes>
                      <h2>Descri????o</h2>
                      <p>{produto && produto.descricao}</p>
                      {token && (
                        <WrapperQuantidade>
                          <h2>Quantidade</h2>
                          <button
                            onClick={() => {
                              if (contadorQuantidade >= 0)
                                setContadorQuantidade(contadorQuantidade - 1);
                            }}
                          >
                            -
                          </button>
                          <span>{contadorQuantidade}</span>
                          <button
                            onClick={() => {
                              if (contadorQuantidade >= produto.quantidade) {
                                alert(
                                  `Quantidade dispon??vel desse produto: ${produto.quantidade}`
                                );
                              } else {
                                setContadorQuantidade(contadorQuantidade + 1);
                              }
                            }}
                          >
                            +
                          </button>
                        </WrapperQuantidade>
                      )}
                    </WrapperDescricaoDetalhes>

                    <WrapperButtonDetalhes>
                      {token ? (
                        <button onClick={addProduct}>
                          Adicionar ao carrinho
                        </button>
                      ) : (
                        <div>
                          <button onClick={() => history.push("/signin")}>
                            Login
                          </button>
                        </div>
                      )}
                    </WrapperButtonDetalhes>
                  </WrapperDetalhes>
                </WrapperCoreDetalhes>
                {produto.foto && (
                  <img
                    src={
                      produto
                        ? `${BACKEND}/${produto.foto.path}`
                            .replace("public\\", "files/")
                            .replace("uploads\\", "")
                        : beerDefault
                    }
                    alt="imagem-detalhes-produtos"
                  />
                )}
              </ContainerPrincipal>
            )}
          </Modal>
        )}
      </>
    );
  }
};

export default ModalDetalhesProduto;
