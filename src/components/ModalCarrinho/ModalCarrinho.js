import React, { useState, useEffect, useRef, useContext } from "react";
import beerDefault from "../../assets/beer-default.png";
import { AuthContext } from "../../contexts/auth";
import { CartContext } from "../../contexts/cart";
import Modal from "react-modal";
import { IoClose, IoAddSharp, IoCardSharp, IoCashSharp } from "react-icons/io5";
import {
  WrapperHeadModal,
  ContainerPrincipal,
  ContainerProdutos,
  ContainerInfoPagamento,
  ContainerInfoEndereco,
  Row,
  WrapperFormaPagamento,
  WrapperButtonPagamento,
} from "./styles.js";
import { BACKEND } from "../../constants";
import CardCarrinho from "../CardCarrinho/CardCarrinho";
import { useOutsideModal } from "../../hooks/outsideModal";

Modal.setAppElement("#root");

const ModalCarrinho = ({ isOpenCarrinho, setIsOpenCarrinho }) => {
  const [stateTroco, setStateTroco] = useState(false);
  const { cart } = useContext(CartContext);
  const { objUsuarioAtivo } = useContext(AuthContext);
  let valorProdutos = 0;
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

  function objectToArray(object) {
    let result = [];
    let lengthObject = Object.keys(object).length;
    let keysObject = Object.keys(object);
    let valuesObject = Object.values(object);

    for (let i = 0; i < lengthObject; i++) {
      result.push([keysObject[i], valuesObject[i]]);
    }
    return result;
  }

  const arrayCart = objectToArray(cart);

  function handleCloseModal() {
    setIsOpenCarrinho(false);
  }

  async function handleSubmit() {
    let objRequest = {
      produtos: arrayCart,
    };
    console.log(objUsuarioAtivo);
    console.log(objRequest);
  }

  return (
    <>
      {isOpenCarrinho && (
        <Modal
          isOpen={isOpenCarrinho}
          onRequestClose={handleCloseModal}
          style={customStyles}
        >
          <WrapperHeadModal>
            <h2>Carrinho </h2>
            <button onClick={() => setIsOpenCarrinho(false)}>
              <IoClose size={18} />
            </button>
          </WrapperHeadModal>
          <ContainerPrincipal>
            <ContainerProdutos>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h2>Produtos</h2>
                <button
                  className="btnAddProduto"
                  onClick={() => setIsOpenCarrinho(false)}
                >
                  <IoAddSharp size={32} color="eba200" />
                  &nbsp;Adicionar Produtos
                </button>
              </div>
              {arrayCart.length > 0 ? (
                arrayCart.map((item, index) => {
                  valorProdutos += item[1].produto.valor * item[1].quantity;
                  return <CardCarrinho key={index} produto={item} />;
                })
              ) : (
                <span>
                  <strong>Carrinho Vazio...</strong>
                </span>
              )}
            </ContainerProdutos>
            <ContainerInfoEndereco>
              <h2>Endereço para entrega</h2>
              <Row>
                <span>Endereço para entrega: </span>
                <span>Rua Portugal, 225. Vila Roma, Itu</span>
              </Row>
            </ContainerInfoEndereco>
            <ContainerInfoPagamento>
              <h2>Pagamento</h2>
              <Row>
                <span>Produtos: </span>
                <span>R$ {valorProdutos.toLocaleString()}</span>
              </Row>
              <Row>
                <span>Taxa de entrega: </span>
                <span>R$ 4,99</span>
              </Row>
              <Row>
                <span>
                  <strong>Total a pagar: </strong>
                </span>
                <span>R$ {(valorProdutos + 4.99).toLocaleString(2)}</span>
              </Row>
              <Row>
                <h2 style={{ marginTop: "16px" }}>Forma de Pagamento</h2>
              </Row>
              <WrapperFormaPagamento>
                <span style={{ display: "flex", alignItems: "center" }}>
                  <IoCardSharp size={24} color="00389e" />
                  &nbsp;Dinheiro{" "}
                </span>

                <input
                  type="text"
                  placeholder="Troco para quanto?"
                  disabled={stateTroco}
                ></input>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    marginTop: "8px",
                  }}
                >
                  <input
                    id="inputTroco"
                    type="checkbox"
                    onChange={() => setStateTroco(!stateTroco)}
                  ></input>
                  &nbsp;
                  <label htmlFor="inputTroco">Não precisa de troco? </label>
                </div>
              </WrapperFormaPagamento>
              <Row>
                <span style={{ display: "flex", alignItems: "center" }}>
                  <IoCashSharp size={24} color="00389e" />
                  &nbsp; Cartão de Débito ou Crédito{" "}
                </span>
              </Row>
              <WrapperButtonPagamento>
                <button onClick={handleSubmit}>Confirmar pedido</button>
              </WrapperButtonPagamento>
            </ContainerInfoPagamento>
          </ContainerPrincipal>
        </Modal>
      )}
    </>
  );
};

export default ModalCarrinho;
