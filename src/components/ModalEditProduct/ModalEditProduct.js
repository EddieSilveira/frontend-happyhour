import React, { useState, useEffect, useContext } from "react";
import { BACKEND } from "../../constants";
import { AuthContext } from "../../contexts/auth";
import Modal from "react-modal";
import { IoClose, IoSave } from "react-icons/io5";
import {
  WrapperHeadModal,
  Form,
  WrapperButton,
  WrapperDescription,
  Column,
} from "./styles.js";
Modal.setAppElement("#root");

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
  const [statusCheck, setStatusCheck] = useState(false);
  useEffect(() => {
    document.title = "HappyHour - Admin";
    if (record.status === "ativo") setStatusCheck(true);
  }, []);

  const customStyles = {
    content: {
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

  async function imageUpload(file) {
    let url = `${BACKEND}/upload`;
    const data = new FormData();
    data.append("file", file, file.name);

    const imageResponse = await fetch(url, {
      method: "POST",
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
      await setInitialValues((prevState) => ({
        ...prevState,
        foto: picture,
      }));
    }
    setInitialValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const editProduct = async (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(initialValues);
    const url = `${BACKEND}/produtos`;
    const response = await fetch(url, {
      mode: "cors",
      method: "PUT",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
        "x-access-token": token,
      },
      body: JSON.stringify(initialValues),
    });
    const data = await response.json();
    data && loadData(`${BACKEND}/produtos`);
    data && setLoading(false);
  };

  function toggleStatus() {
    setStatusCheck(!statusCheck);
    setInitialValues((prevState) => ({
      ...prevState,
      status: initialValues.status === "ativo" ? "inativo" : "ativo",
    }));
  }

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
            <WrapperDescription>
              <label htmlFor="inputEditNome">Nome: </label>
              <input
                type="text"
                id="inputEditNome"
                name="nome"
                value={initialValues.nome}
                onChange={handleChange}
              />
              <label htmlFor="inputEditDescricao">Descri????o: </label>
              <textarea
                type="text"
                id="inputEditDescricao"
                name="descricao"
                value={initialValues.descricao}
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
            </WrapperDescription>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Column>
                <label htmlFor="inputEditVolume">Volume:</label>
                <input
                  type="text"
                  id="inputEditVolume"
                  name="volume"
                  value={initialValues.volume}
                  onChange={handleChange}
                />
                <label htmlFor="inputEditTeor">Teor Alco??lico: </label>
                <input
                  type="number"
                  id="inputEditTeor"
                  name="teor"
                  value={initialValues.teor}
                  onChange={handleChange}
                />
              </Column>
              <Column>
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
              </Column>
              <Column>
                <label htmlFor="file">
                  Foto do Produto (com fundo branco ou transparente)
                </label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  accept="image/*, .pdf"
                  onChange={handleChange}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <label htmlFor="inputEditStatus">Status: </label>
                  <input
                    style={{ marginLeft: "8px" }}
                    type="checkbox"
                    checked={statusCheck}
                    id="inputEditStatus"
                    name="status"
                    value={initialValues.status}
                    onChange={toggleStatus}
                  />
                  &nbsp;
                  <label htmlFor="inputEditOferta">Oferta: </label>
                  <input
                    style={{ marginLeft: "8px" }}
                    type="checkbox"
                    checked={initialValues.isOferta}
                    id="inputEditOferta"
                    name="oferta"
                    value={initialValues.isOferta}
                    onChange={() =>
                      setInitialValues((prevState) => ({
                        ...prevState,
                        isOferta: !initialValues.isOferta,
                      }))
                    }
                  />
                </div>
              </Column>
            </div>
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
