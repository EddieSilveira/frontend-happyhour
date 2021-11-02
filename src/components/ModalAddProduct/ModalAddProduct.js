import React, { useState, useEffect, useContext } from 'react';
import { BACKEND } from '../../constants';
import { AuthContext } from '../../contexts/auth';
import Modal from 'react-modal';
import { IoClose, IoSave } from 'react-icons/io5';
import { WrapperHeadModal, Form, WrapperButton, Column } from './styles.js';
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
    nome: '',
    descricao: '',
    volume: '',
    teor: '',
    categoria: '',
    quantidade: '',
    valor: '',
    status: '',
    foto: {
      originalName: '',
      path: '',
      size: '',
      mimetype: '',
    },
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

  async function imageUpload(file) {
    let url = `${BACKEND}/upload`;
    const data = new FormData();
    data.append('file', file, file.name);

    const imageResponse = await fetch(url, {
      method: 'POST',
      body: data,
    }).then((response) => response.json());
    const picture = {
      path: imageResponse.file.path,
      originalName: imageResponse.file.originalname,
      size: imageResponse.file.size,
      mimetype: imageResponse.file.mimetype,
    };
    return picture;
  }
  
  async function handleChange(e) {
    const { name, value } = e.target;
    if (e.target.files) {
      const picture = await imageUpload(e.target.files[0]);
      await setDataForm((prevState) => ({
        ...prevState,
        foto: picture,
      }));
    }
    setDataForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  async function addProduct() {
    console.log(dataForm)
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
        console.log(data)
      })
      .catch(function (error) {
        console.error(
          'Houve um problema ao excluir a categoria: ' + error.message,
        );
      });
    setLoading(false);
  }

  function toggleisActive(){
    if(dataForm.status === '' || dataForm.status === "inativo"){
      setDataForm({
        ...dataForm,
        status: 'ativo'
      });
    }else{
      setDataForm({
        ...dataForm,
        status: 'inativo'
      });
    }
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
          <label htmlFor="inputAddNome">Nome: </label>
          <input
            type="text"
            id="inputAddNome"
            name="nome"
            value={dataForm.nome}
            onChange={handleChange}
          />
             <label htmlFor="inputAddDescricao">Descrição: </label>
          <textarea
            type="text"
            id="inputAddDescricao"
            name="descricao"
            value={dataForm.descricao}
            onChange={handleChange}
            
          />
          <label htmlFor="inputAddCategoria">Categoria:</label>
          <input
            type="text"
            id="inputAddCategoria"
            name="categoria"
            value={dataForm.categoria}
            onChange={handleChange}
          />
          <div style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>
          <Column>
            <label htmlFor="inputAddVolume">Volume:</label>
            <input
              type="text"
              id="inputAddVolume"
              name="volume"
              value={dataForm.volume}
              onChange={handleChange}
            />
            <label htmlFor="inputAddTeor">Teor Alcoólico: </label>
            <input
              type="number"
              id="inputAddTeor"
              name="teor"
              value={dataForm.teor}
              onChange={handleChange}
            />
             </Column>
             <Column>
            <label htmlFor="inputAddQuantidade">Quantidade: </label>
            <input
              type="number"
              id="inputAddQuantidade"
              name="quantidade"
              value={dataForm.quantidade}
              onChange={handleChange}
            />
            <label htmlFor="inputAddValor">Valor: </label>
            <input
              type="number"
              id="inputAddValor"
              value={dataForm.valor}
              name="valor"
              onChange={handleChange}
            />
             </Column>
             </div>
             <Column>
              <label htmlFor="file">Foto do Produto (com fundo branco ou transparente)</label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  accept="image/*, .pdf"
                  onChange={handleChange}
                />
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                  <label htmlFor="inputAddStatus">Status (Marque se estiver ativo): </label>
                  <input
                    type="checkbox"
                    id="inputAddStatus"
                    name="status"
                    value={dataForm.status}
                    onChange={toggleisActive}
                  />
                  </div>
            </Column>
          <WrapperButton>
            <button type="submit">
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
