import React, { useState, useContext } from "react";
import { IoCreate, IoTrashBin } from "react-icons/io5";
import { BACKEND } from "../../constants";
import ModalEditProduct from "../ModalEditProduct/ModalEditProduct";
import ModalEditClient from "../ModalEditClient/ModalEditClient";
import { AuthContext } from "../../contexts/auth";
import Loader from "react-loader-spinner";
import { StyledTable } from "./styles";

const Head = ({ keys, head }) => {
  const tableHead = head || {};
  function filterColumnsHead(value) {
    return (
      value !== "_id" &&
      value !== "createdAt" &&
      value !== "updatedAt" &&
      value !== "senha" &&
      value !== "rua" &&
      value !== "bairro" &&
      value !== "numero" &&
      value !== "__v" &&
      value !== "dataNascimento" &&
      value !== "cidade" &&
      value !== "nivelAcesso"
    );
  }
  const filtered = keys.filter(filterColumnsHead);
  filtered.push("Ações");

  return (
    <thead>
      <tr>
        {filtered.map((key) => (
          <th key={key}>{tableHead[key] || key}</th>
        ))}
      </tr>
    </thead>
  );
};

const Row = ({ record, loadData, title }) => {
  const { token, loading, setLoading } = useContext(AuthContext);
  const [isOpenEditProduct, setIsOpenEditProduct] = useState(false);
  const [isOpenEditClient, setIsOpenEditClient] = useState(false);
  const keys = Object.keys(record);
  const values = Object.values(record);
  var formato = {
    minimumFractionDigits: 2,
    style: "currency",
    currency: "BRL",
  };

  function filterColumnsBody(value) {
    return (
      value !== "_id" &&
      value !== "createdAt" &&
      value !== "updatedAt" &&
      value !== "senha" &&
      value !== "rua" &&
      value !== "bairro" &&
      value !== "numero" &&
      value !== "__v" &&
      value !== "cep" &&
      value !== "cidade" &&
      value !== "dataNascimento" &&
      value !== "nivelAcesso"
    );
  }

  function isValue(element, index, array) {
    if (index === 5) {
      let formated = element.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });
      return formated;
    }
  }

  //TERMINAR
  const filtered = keys.filter(filterColumnsBody);
  //console.log(values.findIndex(isValue));

  function handleOpenModal() {
    if (title === "Produtos") setIsOpenEditProduct(true);
    if (title === "Clientes") setIsOpenEditClient(true);
  }

  function handleCloseModal() {
    if (title === "Produtos") setIsOpenEditProduct(false);
    if (title === "Clientes") setIsOpenEditClient(false);
  }

  async function excluirCategoria() {
    setLoading(true);
    let url = `${BACKEND}/produtos/${record._id}`;
    await fetch(url, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-access-token": token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        loadData(`${BACKEND}/produtos`);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(
          "Houve um problema ao excluir a categoria: " + error.message
        );
      });
  }

  function formataTelefone(key, tel) {
    const { telefone } = tel;
    const parte1 = telefone.slice(0, 5);
    const parte2 = telefone.slice(5, 9);
    const telAjustado = `${parte1}-${parte2}`;
    return <td key={key}>{telAjustado}</td>;
  }
  return (
    <tr key={record.id}>
      {filtered.map((key, index) => {
        if (filtered[index] === "teor") {
          return <td key={key}>{record[key]}%</td>;
        }
        if (filtered[index] === "valor") {
          return (
            <td key={key}> {record[key].toLocaleString("pt-BR", formato)}</td>
          );
        }
        if (filtered[index] === "cpf") {
          return (
            <td key={key}>
              {record[key].replace(
                /(\d{3})(\d{3})(\d{3})(\d{2})/g,
                "$1.$2.$3-$4"
              )}
            </td>
          );
        }
        if (filtered[index] === "telefone") {
          return formataTelefone(key, record);
        }
        return <td key={key}>{record[key]}</td>;
      })}
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <button onClick={() => handleOpenModal()}>
          <IoCreate size={32} />
        </button>
        <button onClick={excluirCategoria}>
          <IoTrashBin size={30} style={{ marginTop: "4px" }} />
        </button>
      </div>
      <ModalEditProduct
        isOpen={isOpenEditProduct}
        setIsOpen={setIsOpenEditProduct}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
        record={record}
        loadData={loadData}
      />
      <ModalEditClient
        isOpen={isOpenEditClient}
        setIsOpen={setIsOpenEditClient}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
        record={record}
        loadData={loadData}
      />
    </tr>
  );
};

const Table = ({ data, head, loadData, title }) => {
  let keys = [];
  const { loading } = useContext(AuthContext);
  const dataTable = data.map((item) => {
    delete item["foto"];
    // delete item['teor'];
    // delete item['descricao'];
    // delete item['volume'];
    return item;
  });

  function isEmpty(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) return false;
    }
    return true;
  }

  if (!isEmpty(data)) {
    keys = Object.keys(data[0]);
  }

  return (
    <StyledTable>
      <Head keys={keys} head={head} />
      {loading && <Loader />}
      {!loading && (
        <tbody>
          {dataTable.map((record) => (
            <Row
              key={record._id}
              record={record}
              loadData={loadData}
              title={title}
            />
          ))}
        </tbody>
      )}
    </StyledTable>
  );
};
export default Table;
