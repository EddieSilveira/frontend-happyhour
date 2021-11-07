import React, { useState, useEffect, useRef, useContext } from 'react';
import beerDefault from '../../assets/beer-default.png';
import { AuthContext } from '../../contexts/auth';
import Modal from 'react-modal';
import { IoClose, IoAddSharp, IoCardSharp, IoCashSharp } from 'react-icons/io5';
import { WrapperHeadModal, ContainerPrincipal, ContainerProdutos, ContainerInfoPagamento, ContainerInfoEndereco, Row, WrapperFormaPagamento, WrapperButtonPagamento} from './styles.js';
import { BACKEND } from '../../constants';
import CardCarrinho from '../CardCarrinho/CardCarrinho';
import { useOutsideModal } from '../../hooks/outsideModal';

Modal.setAppElement('#root');

const ModalCarrinho = ({
  isOpenCarrinho,
  setIsOpenCarrinho,
  handleOpenModal,
  handleCloseModal,
  record,
  loadData,
  produto
}) => {
  const [contadorQuantidade, setContadorQuantidade] = useState(0)
  const [stateTroco, setStateTroco] = useState(false)
  const {ref} = useOutsideModal
  const customStyles = {
    content: {
      width: '50%',
      height: '500px',
      minWidth: '40%',
      minHeight: '40%',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <>
    {isOpenCarrinho && 
      <Modal
      isOpen={isOpenCarrinho}
      onRequestClose={handleCloseModal}
      style={customStyles}
    >
      <WrapperHeadModal>
        <h2>Carrinho</h2>
        <button onClick={() => setIsOpenCarrinho(false)}>
          <IoClose size={18} />
        </button>
      </WrapperHeadModal>
      <ContainerPrincipal>
        <ContainerProdutos>
          <div style={{display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
            <h2>Produtos</h2>
            <button className="btnAddProduto" onClick={() => setIsOpenCarrinho(false)}><IoAddSharp size={32} color="eba200"/>&nbsp;Adicionar Produtos</button>
          </div>
          <CardCarrinho/>
          <CardCarrinho/>
          <CardCarrinho/>
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
              <span>R$ 5,00</span>
            </Row>
            <Row>
              <span>Taxa de entrega: </span>
              <span>R$ 4,99</span>
            </Row>
            <Row>
              <span><strong>Total a pagar: </strong></span>
              <span>R$ 9,99</span>
            </Row>
            <Row>
              <h2 style={{marginTop: '16px'}}>Forma de Pagamento</h2>
            </Row>
            <WrapperFormaPagamento>
              <span style={{display: 'flex', alignItems: 'center'}}><IoCardSharp size={24} color="00389e"/>&nbsp;Dinheiro </span>
              
              <input type="text" placeholder="Troco para quanto?" disabled={stateTroco}></input>
              <div style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginTop: '8px'}}>
                <span>Não precisa de troco? </span>
                &nbsp;
                <input type="checkbox" onChange={() => setStateTroco(!stateTroco)}></input>
              </div>
            </WrapperFormaPagamento>
            <Row>
              <span style={{display: 'flex', alignItems: 'center'}}><IoCashSharp size={24} color="00389e"/>&nbsp; Cartão de Débito ou Crédito </span>
            </Row>
          <WrapperButtonPagamento>
          <button>Confirmar pedido</button>
          </WrapperButtonPagamento>
          
        </ContainerInfoPagamento>
      </ContainerPrincipal>
    </Modal>
  }
    </>
  );
};

export default ModalCarrinho;
