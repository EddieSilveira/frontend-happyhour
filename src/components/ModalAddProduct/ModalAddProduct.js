import React, { useState, useEffect, useContext } from 'react';
import { BACKEND } from '../../constants';
import { AuthContext } from '../../contexts/auth';
import Modal from 'react-modal';
import { IoClose, IoSave } from 'react-icons/io5';
import { WrapperHeadModal, Form, WrapperButton } from './styles.js';
Modal.setAppElement('#root');

const ModalAddProduct = ({
  isOpen,
  setIsOpen,
  handleOpenModal,
  handleCloseModal,
  record,
  loadData,
}) => {
  const { token, loading, setLoading } = useContext(AuthContext);
  const [dataForm, setDataForm] = useState({
    status: '',
    nome: '',
    categoria: '',
    quantidade: '',
    valor: '',
  });
  useEffect(() => {
    document.title = 'HappyHour - Admin';
  }, []);

  const customStyles = {
    content: {
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

  function handleChange(e) {
    const { name, value } = e.target;
    setDataForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  async function addProduct() {
    setLoading(true);
    let url = `${BACKEND}/produtos`;
    await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': token,
      },
      body: JSON.stringify(dataForm),
    })
      .then((response) => response.json())
      .then((data) => {
        loadData(`${BACKEND}/produtos`);
        handleCloseModal();
        setLoading(false);
      })
      .catch(function (error) {
        console.error(
          'Houve um problema ao excluir a categoria: ' + error.message,
        );
      });
    setLoading(false);
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
      >
        <WrapperHeadModal>
          <h2>Adicionar Produto</h2>
          <button onClick={handleCloseModal}>
            <IoClose size={18} />
          </button>
        </WrapperHeadModal>

        <Form onSubmit={addProduct}>
          <label htmlFor="inputEditStatus">Status: </label>
          <input
            type="text"
            id="inputEditStatus"
            name="status"
            value={dataForm.status}
            onChange={handleChange}
          />
          <label htmlFor="inputEditNome">Nome: </label>
          <input
            type="text"
            id="inputEditNome"
            name="nome"
            value={dataForm.nome}
            onChange={handleChange}
          />
          <label htmlFor="inputEditCategoria">Categoria:</label>
          <input
            type="text"
            id="inputEditCategoria"
            name="categoria"
            value={dataForm.categoria}
            onChange={handleChange}
          />
          <label htmlFor="inputEditQuantidade">Quantidade: </label>
          <input
            type="number"
            id="inputEditQuantidade"
            name="quantidade"
            value={dataForm.quantidade}
            onChange={handleChange}
          />
          <label htmlFor="inputEditValor">Valor: </label>
          <input
            type="number"
            id="inputEditValor"
            value={dataForm.valor}
            name="valor"
            onChange={handleChange}
          />
          <WrapperButton>
            <button>
              <IoSave />
              &nbsp;Salvar
            </button>
          </WrapperButton>
        </Form>
      </Modal>
    </>
  );
};

export default ModalAddProduct;
