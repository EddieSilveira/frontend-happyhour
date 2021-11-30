import React, { useState, useEffect, useRef, useContext } from "react";
import beerDefault from "../../assets/beer-default.png";
import { AuthContext } from "../../contexts/auth";
import { CartContext } from "../../contexts/cart";
import Modal from "react-modal";
import {
  IoClose,
  IoCardSharp,
  IoCashSharp,
  IoCheckmarkSharp,
} from "react-icons/io5";
import {
  WrapperHeadModal,
  ContainerPrincipal,
  ContainerProdutos,
  ContainerInfoPagamento,
  ContainerInfoEndereco,
  Row,
  WrapperFormaPagamento,
  WrapperButtonPagamento,
  WrapperFormEndereco,
} from "./styles.js";
import { BACKEND } from "../../constants";
import CardCarrinho from "../CardCarrinho/CardCarrinho";
import { useOutsideModal } from "../../hooks/outsideModal";
import Loader from "react-loader-spinner";

Modal.setAppElement("#root");

const ModalCarrinho = ({ isOpenCarrinho, setIsOpenCarrinho }) => {
  const { cart, setCart } = useContext(CartContext);
  const { getCookie } = useContext(AuthContext);
  const stringUser = getCookie("user");
  const token = getCookie("token");
  const user = JSON.parse(stringUser);
  const [formPedido, setFormPedido] = useState(user);
  const [formaPagamento, setFormaPagamento] = useState("");
  const [carrinhoProdutos, setCarrinhoProdutos] = useState();
  const [stateTroco, setStateTroco] = useState(false);
  const [valueTroco, setValueTroco] = useState(0);
  const [loadingPedido, setLoadingPedido] = useState(false);
  let valorProdutos = 0;
  let formatoMoeda = {
    minimumFractionDigits: 2,
    style: "currency",
    currency: "BRL",
  };

  let taxaEntrega = 4.99;
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

  useEffect(() => {
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
    let arrayCart = objectToArray(cart);
    setCarrinhoProdutos(arrayCart);
  }, [cart]);

  function handleCloseModal() {
    setIsOpenCarrinho(false);
  }

  async function requestPedido(objPedido) {
    const url = `${BACKEND}/pedidos`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
        "x-access-token": token,
      },
      body: JSON.stringify(objPedido),
    });
    const data = await response.json();
    console.log(data);
    if (data)
      document.cookie = "cart=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    setCarrinhoProdutos("");
    setCart("");
    setIsOpenCarrinho(false);
  }

  async function handleSubmit() {
    setLoadingPedido(true);

    setFormPedido((prevState) => ({
      ...prevState,
      formaPagamento: formaPagamento,
      stateTroco: stateTroco,
      valueTroco: valueTroco,
    }));

    let objPedido = {
      produtos: carrinhoProdutos,
      infoPedido: formPedido,
      valorPedido: valorProdutos + taxaEntrega,
    };

    requestPedido(objPedido);
    setLoadingPedido(false);
  }

  function handleChange(e) {
    let { name, value } = e.target;
    setFormPedido((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
              </div>
              {carrinhoProdutos.length > 0 ? (
                carrinhoProdutos.map((item, index) => {
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
                <WrapperFormEndereco>
                  <div>
                    <span htmlFor="rua">Rua:</span>
                    <input
                      value={formPedido.rua}
                      id="rua"
                      name="rua"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <span htmlFor="numero">Número:</span>
                    <input
                      value={formPedido.numero}
                      id="numero"
                      name="numero"
                      type="number"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <span htmlFor="bairro">Bairro:</span>
                    <input
                      value={formPedido.bairro}
                      id="bairro"
                      name="bairro"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <span htmlFor="cidade">Cidade:</span>
                    <input
                      value={formPedido.cidade}
                      id="cidade"
                      name="cidade"
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <span htmlFor="cep">CEP:</span>
                    <input
                      value={formPedido.cep}
                      id="cep"
                      name="cep"
                      onChange={handleChange}
                    />
                  </div>
                </WrapperFormEndereco>
              </Row>
            </ContainerInfoEndereco>
            <ContainerInfoPagamento>
              <h2>Pagamento</h2>
              <Row>
                <span>Produtos: </span>
                <span>
                  {valorProdutos.toLocaleString("pt-BR", formatoMoeda)}
                </span>
              </Row>
              <Row>
                <span>Taxa de entrega: </span>
                <span>R$ 4,99</span>
              </Row>
              <Row>
                <span>
                  <strong>Total a pagar: </strong>
                </span>
                <span>
                  {(valorProdutos + 4.99).toLocaleString("pt-BR", formatoMoeda)}
                </span>
              </Row>
              <Row>
                <h2 style={{ marginTop: "16px" }}>Forma de Pagamento</h2>
              </Row>
              <WrapperFormaPagamento>
                <button
                  onClick={() => {
                    setFormaPagamento("cartao");
                    setStateTroco(false);
                    setValueTroco(0);
                  }}
                >
                  <IoCashSharp size={24} color="00389e" />
                  &nbsp; Cartão de Débito ou Crédito{" "}
                  {formaPagamento === "cartao" ? (
                    <IoCheckmarkSharp color="#eba200" size={24} />
                  ) : (
                    ""
                  )}
                </button>
                <button onClick={() => setFormaPagamento("dinheiro")}>
                  <IoCardSharp size={24} color="00389e" />
                  &nbsp;Dinheiro{" "}
                  {formaPagamento === "dinheiro" ? (
                    <IoCheckmarkSharp color="#eba200" size={24} />
                  ) : (
                    ""
                  )}
                </button>
                {formaPagamento === "dinheiro" && (
                  <input
                    value={valueTroco}
                    type="text"
                    placeholder="Troco para quanto?"
                    onChange={(e) => setValueTroco(e.target.value)}
                    disabled={stateTroco}
                  ></input>
                )}
                {formaPagamento === "dinheiro" && (
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
                    <label
                      htmlFor="inputTroco"
                      onClick={() => setValueTroco(0)}
                    >
                      Não precisa de troco?{" "}
                    </label>
                  </div>
                )}
              </WrapperFormaPagamento>
              <WrapperButtonPagamento>
                <button onClick={handleSubmit}>
                  Confirmar pedido &nbsp;
                  {loadingPedido && (
                    <Loader
                      type="TailSpin"
                      color="#00389e"
                      height={25}
                      width={25}
                    />
                  )}
                </button>
              </WrapperButtonPagamento>
            </ContainerInfoPagamento>
          </ContainerPrincipal>
        </Modal>
      )}
    </>
  );
};

export default ModalCarrinho;
