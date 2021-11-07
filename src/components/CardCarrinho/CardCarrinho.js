import React, {useState, useEffect} from 'react';
import beerDefault from '../../assets/beer-default.png';
import { BACKEND } from '../../constants';
import ModalDetalhesProduto from '../ModalDetalhesProduto/ModalDetalhesProduto';
import {
  ContainerCard,
  ImageCard,
  ContainerDescriptionCard,
  ContainerButtonCard,
  ButtonCard,
} from './styles.js';
import {IoBagRemove} from 'react-icons/io5'

const CardCarrinho = ({produto}) => {
  const [isOpenDetalhes, setIsOpenDetalhes] = useState(false);
  const [contadorQuantidade, setContadorQuantidade] = useState(1)

  return (
    <>
    <ContainerCard>
      <button className="btnRemoverProduto"><IoBagRemove size={28}/></button>
     <ImageCard src={produto ? `${BACKEND}/${produto.foto.path}`.replace('public\\', 'files/').replace('uploads\\', '') : beerDefault} alt="imagem-detalhes-produtos"/>  
      <ContainerDescriptionCard>
        <span className="descricaoProduto">Brahma lata 350 ml </span>
        <span className="descricaoProduto valorProduto">R$ 3,50</span>
        <span className="descricaoProduto"> por unidade</span>
      <ContainerButtonCard>
        <ButtonCard onClick={() => {
          setIsOpenDetalhes(true)
          if(contadorQuantidade >= 1) setContadorQuantidade(contadorQuantidade - 1)
        }}>
        -
        </ButtonCard>
        <span>{contadorQuantidade}</span>
        <ButtonCard onClick={() => {
          setIsOpenDetalhes(true)
          setContadorQuantidade(contadorQuantidade + 1)
        }}>
        +
        </ButtonCard>
      </ContainerButtonCard>
      </ContainerDescriptionCard>
    </ContainerCard>
       <ModalDetalhesProduto
       produto={produto}
       isOpenDetalhes={isOpenDetalhes}
       setIsOpenDetalhes={setIsOpenDetalhes}
/>
</>
  );
};

export default CardCarrinho;
