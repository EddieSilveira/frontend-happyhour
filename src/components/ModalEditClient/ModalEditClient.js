import React, { useState, useEffect, useContext } from "react";
import { BACKEND } from "../../constants";
import { AuthContext } from "../../contexts/auth";
import Modal from "react-modal";
import { IoClose, IoSave } from "react-icons/io5";
import {
  WrapperHeadModal,
  Form,
  WrapperInput,
  WrapperButton,
} from "./styles.js";
Modal.setAppElement("#root");

const ModalEditClient = ({
  isOpen,
  setIsOpen,
  handleOpenModal,
  handleCloseModal,
  record,
  loadData,
}) => {
  const { getCookie, loading, setLoading } = useContext(AuthContext);
  const [initialValues, setInitialValues] = useState(record);
  const token = getCookie("token");
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

  const editClient = async (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(initialValues);
    const url = `${BACKEND}/usuarios`;
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

    data && loadData(`${BACKEND}/usuarios`);
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
          <h2>Editar Cliente</h2>
          <button onClick={handleCloseModal}>
            <IoClose size={18} />
          </button>
        </WrapperHeadModal>

        {initialValues && (
          <Form onSubmit={editClient}>
            <label htmlFor="inputAddCpf">Cpf:</label>
            <input
              type="text"
              id="inputAddCpf"
              name="cpf"
              value={initialValues.cpf}
              onChange={handleChange}
            />
            <label htmlFor="inputAddEmail">Email: </label>
            <input
              type="email"
              id="inputAddEmail"
              name="email"
              value={initialValues.email}
              onChange={handleChange}
            />
            <WrapperInput>
              <label htmlFor="inputEditStatus">Status: </label>
              <input
                type="text"
                id="inputAddStatus"
                name="status"
                value={initialValues.status}
                onChange={handleChange}
              />
              <label htmlFor="inputAddNome">Nome: </label>
              <input
                type="text"
                id="inputAddNome"
                name="nome"
                value={initialValues.nome}
                onChange={handleChange}
              />
              <label htmlFor="inputAddRua">Rua: </label>
              <input
                type="text"
                id="inputAddRua"
                value={initialValues.rua}
                name="rua"
                onChange={handleChange}
              />
              <label htmlFor="inputAddNumero">Numero: </label>
              <input
                type="number"
                id="inputAddNumero"
                value={initialValues.numero}
                name="numero"
                onChange={handleChange}
              />
            </WrapperInput>
            <WrapperInput>
              <label htmlFor="inputAddBairro">Bairro: </label>
              <input
                type="text"
                id="inputAddBairro"
                value={initialValues.bairro}
                name="bairro"
                onChange={handleChange}
              />
              <label htmlFor="inputAddCidade">Cidade: </label>
              <input
                type="text"
                id="inputAddCidade"
                value={initialValues.cidade}
                name="cidade"
                onChange={handleChange}
              />
              <label htmlFor="inputAddCep">Cep: </label>
              <input
                type="text"
                id="inputAddCep"
                value={initialValues.cep}
                name="cep"
                onChange={handleChange}
              />
              <label htmlFor="inputAddTelefone">Telefone: </label>
              <input
                type="text"
                id="inputAddTelefone"
                value={initialValues.telefone}
                name="telefone"
                onChange={handleChange}
              />
              <label htmlFor="inputAddNivelAcesso">Nível de Acesso: </label>
              <input
                type="number"
                id="inputAddNivelAcesso"
                value={initialValues.nivelAcesso}
                name="nivelAcesso"
                onChange={handleChange}
              />
            </WrapperInput>
            <label htmlFor="file">Imagem de Perfil: </label>
            <input
              type="file"
              id="file"
              name="file"
              accept="image/*, .pdf"
              onChange={handleChange}
            />
            <WrapperButton>
              <button>
                <IoSave />
                &nbsp;Salvar
              </button>
            </WrapperButton>
            {/* <label htmlFor="inputEditStatus">Status: </label>
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
            </WrapperButton> */}
          </Form>
        )}
      </Modal>
    </>
  );
};

export default ModalEditClient;
