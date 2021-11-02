import React, { useState, useEffect, useContext } from 'react';
import brahmaImage from '../../assets/brahma_600ml.jpg';
import { AuthContext } from '../../contexts/auth';
import Modal from 'react-modal';
import { IoClose, IoSave } from 'react-icons/io5';
import { WrapperHeadModal, ContainerPrincipal, WrapperCoreDetalhes, Column, WrapperQuantidade, WrapperDetalhes, WrapperButtonDetalhes, WrapperDescricaoDetalhes } from './styles.js';
import { BACKEND } from '../../constants';
Modal.setAppElement('#root');

const ModalDetalhesProduto = ({
  isOpenDetalhes,
  setIsOpenDetalhes,
  handleOpenModal,
  handleCloseModal,
  record,
  loadData,
  produto
}) => {
  const { token, loading, setLoading } = useContext(AuthContext);
  const [contadorQuantidade, setContadorQuantidade] = useState(0)
  useEffect(() => {
    document.title = 'HappyHour - Admin';
  }, []);

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
  console.log(produto && produto.foto)
  
  return (
    <>
    {produto && 
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
      {produto && <ContainerPrincipal>
        <WrapperCoreDetalhes>
          <h1>{produto.nome}</h1>
          <h2>R$ {produto.valor}</h2>
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
            <h2>Teor Alcoólico</h2>
            <span>{produto && produto.teor}%</span>
          </Column>
          <WrapperDescricaoDetalhes>
            <h2>Descrição</h2>
            <p>{produto && produto.descricao}</p>
            <WrapperQuantidade>
              <h2>Quantidade</h2>
              <button onClick={() => setContadorQuantidade(contadorQuantidade - 1)}>-</button>
              <span>{contadorQuantidade}</span>
              <button onClick={() => setContadorQuantidade(contadorQuantidade + 1)}>+</button>
            </WrapperQuantidade>
          </WrapperDescricaoDetalhes> 
          <WrapperButtonDetalhes>
          <button>Adicionar ao carrinho</button>
          </WrapperButtonDetalhes>
      </WrapperDetalhes>
        </WrapperCoreDetalhes> 
        {produto.foto &&  <img src={produto ? `${BACKEND}/${produto.foto.path}`.replace('public\\', 'files/').replace('uploads\\', '') : brahmaImage} alt="imagem-detalhes-produtos"/> }
      </ContainerPrincipal>

      }
    </Modal>
    }   
    </>
  );
};

export default ModalDetalhesProduto;
