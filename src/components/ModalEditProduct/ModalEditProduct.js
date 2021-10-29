import React, { useState, useEffect, useContext } from 'react';
import { BACKEND } from '../../constants';
import { AuthContext } from '../../contexts/auth';
import Modal from 'react-modal';
import { IoClose, IoSave } from 'react-icons/io5';
import { WrapperHeadModal, Form, WrapperButton } from './styles.js';
Modal.setAppElement('#root');

const ModalProduct = ({
  isOpen,
  setIsOpen,
  handleOpenModal,
  handleCloseModal,
  record,
  loadData,
}) => {
  const { token, loading, setLoading } = useContext(AuthContext);

  const [initialValues, setInitialValues] = useState(record);
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
    setInitialValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const editProduct = async (e) => {
    setLoading(true);
    e.preventDefault();
    const url = `${BACKEND}/produtos`;
    const response = await fetch(url, {
      mode: 'cors',
      method: 'PUT',
      headers: {
        Accepts: 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': token,
      },
      body: JSON.stringify(initialValues),
    });
    const data = await response.json();
    data && loadData(`${BACKEND}/produtos`);
    data && setLoading(false);
  };
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
      >
        <WrapperHeadModal>
          <h2>Editar Produto</h2>
          <button onClick={handleCloseModal}>
            <IoClose size={18} />
          </button>
        </WrapperHeadModal>

        {initialValues && (
          <Form onSubmit={editProduct}>
            <label htmlFor="inputEditStatus">Status: </label>
            <input
              type="text"
              id="inputEditStatus"
              name="status"
              value={initialValues.status}
              onChange={handleChange}
            />
            <label htmlFor="inputEditNome">Nome: </label>
            <input
              type="text"
              id="inputEditNome"
              name="nome"
              value={initialValues.nome}
              onChange={handleChange}
            />
            <label htmlFor="inputEditCategoria">Categoria:</label>
            <input
              type="text"
              id="inputEditCategoria"
              name="categoria"
              value={initialValues.categoria}
              onChange={handleChange}
            />
            <label htmlFor="inputEditQuantidade">Quantidade: </label>
            <input
              type="number"
              id="inputEditQuantidade"
              name="quantidade"
              value={initialValues.quantidade}
              onChange={handleChange}
            />
            <label htmlFor="inputEditValor">Valor: </label>
            <input
              type="number"
              id="inputEditValor"
              value={initialValues.valor}
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
        )}
      </Modal>
    </>
  );
};

export default ModalProduct;
