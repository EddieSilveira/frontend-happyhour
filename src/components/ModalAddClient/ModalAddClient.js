import React, { useState, useEffect, useContext } from "react";
import {
  WrapperHeadModal,
  Form,
  WrapperInput,
  WrapperButton,
} from "./styles.js";
import { BACKEND } from "../../constants";
import { AuthContext } from "../../contexts/auth";
import Modal from "react-modal";
import { IoClose, IoSave } from "react-icons/io5";
Modal.setAppElement("#root");

const ModalAddClient = ({
  isOpen,
  setIsOpen,
  handleOpenModal,
  handleCloseModal,
  record,
  loadData,
}) => {
  const { token, loading, setLoading } = useContext(AuthContext);
  const [dataForm, setDataForm] = useState({
    status: "",
    nome: "",
    cpf: "",
    email: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    cep: "",
    telefone: "",
    nivelAcesso: "",
    foto: {
      originalName: "",
      path: "",
      size: "",
      mimetype: "",
    },
  });
  useEffect(() => {
    document.title = "HappyHour - Admin";
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

  function handleChange(e) {
    const { name, value } = e.target;
    setDataForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  async function addClient() {
    setLoading(true);
    let url = `${BACKEND}/cadastro`;
    await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": token,
      },
      body: JSON.stringify(dataForm),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        loadData(`${BACKEND}/cadastro`);
        handleCloseModal();
        setLoading(false);
      })
      .catch(function (error) {
        console.error(
          "Houve um problema ao excluir a categoria: " + error.message
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
          <h2>Adicionar Cliente</h2>
          <button onClick={handleCloseModal}>
            <IoClose size={18} />
          </button>
        </WrapperHeadModal>

        <Form onSubmit={addClient}>
          <label htmlFor="inputAddCpf">Cpf:</label>
          <input
            type="text"
            id="inputAddCpf"
            name="cpf"
            value={dataForm.cpf}
            onChange={handleChange}
          />
          <label htmlFor="inputAddEmail">Email: </label>
          <input
            type="email"
            id="inputAddEmail"
            name="email"
            value={dataForm.email}
            onChange={handleChange}
          />

          <WrapperInput>
            <label htmlFor="inputEditStatus">Status: </label>
            <input
              type="text"
              id="inputAddStatus"
              name="status"
              value={dataForm.status}
              onChange={handleChange}
            />
            <label htmlFor="inputAddNome">Nome: </label>
            <input
              type="text"
              id="inputAddNome"
              name="nome"
              value={dataForm.nome}
              onChange={handleChange}
            />
            <label htmlFor="inputAddRua">Rua: </label>
            <input
              type="text"
              id="inputAddRua"
              value={dataForm.rua}
              name="rua"
              onChange={handleChange}
            />
            <label htmlFor="inputAddNumero">Numero: </label>
            <input
              type="number"
              id="inputAddNumero"
              value={dataForm.numero}
              name="numero"
              onChange={handleChange}
            />
          </WrapperInput>
          <WrapperInput>
            <label htmlFor="inputAddBairro">Bairro: </label>
            <input
              type="text"
              id="inputAddBairro"
              value={dataForm.bairro}
              name="bairro"
              onChange={handleChange}
            />
            <label htmlFor="inputAddCidade">Cidade: </label>
            <input
              type="text"
              id="inputAddCidade"
              value={dataForm.cidade}
              name="cidade"
              onChange={handleChange}
            />
            <label htmlFor="inputAddCep">Cep: </label>
            <input
              type="text"
              id="inputAddCep"
              value={dataForm.cep}
              name="cep"
              onChange={handleChange}
            />
            <label htmlFor="inputAddTelefone">Telefone: </label>
            <input
              type="text"
              id="inputAddTelefone"
              value={dataForm.telefone}
              name="telefone"
              onChange={handleChange}
            />
            <div
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingRight: "8px",
              }}
            >
              <label htmlFor="inputAddNivelAcesso">Nível de Acesso: </label>
              <input
                type="number"
                id="inputAddNivelAcesso"
                value={dataForm.nivelAcesso}
                name="nivelAcesso"
                onChange={handleChange}
              />
            </div>
          </WrapperInput>
          <label htmlFor="inputAddFile">Imagem de Perfil: </label>
          <input
            type="file"
            id="inputAddFile"
            name="file"
            accept="image/*"
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

export default ModalAddClient;
