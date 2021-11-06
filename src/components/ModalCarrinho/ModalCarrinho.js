import React, { useState, useEffect, useContext } from 'react';
import beerDefault from '../../assets/beer-default.png';
import { AuthContext } from '../../contexts/auth';
import Modal from 'react-modal';
import { IoClose, IoAddSharp } from 'react-icons/io5';
import { WrapperHeadModal, ContainerPrincipal, ContainerProdutos, ContainerInfoPagamento, Row, WrapperButtonPagamento} from './styles.js';
import { BACKEND } from '../../constants';
import CardCarrinho from '../CardCarrinho/CardCarrinho';

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
  
  console.log()
  return (
    <>
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
        <ContainerInfoPagamento>
          <h2>Finalizar Pedido</h2>
          <Row>
            <span>Quantidade de produtos: </span>
            <span>R$ 5,00</span>
          </Row>
          <Row>
            <span>Taxa de entrega: </span>
            <span>R$ 4,99</span>
          </Row>
          <WrapperButtonPagamento>
          <button>Confirmar pedido</button>
          </WrapperButtonPagamento>
          
        </ContainerInfoPagamento>
      </ContainerPrincipal>
    </Modal>
  
    </>
  );
};

export default ModalCarrinho;
