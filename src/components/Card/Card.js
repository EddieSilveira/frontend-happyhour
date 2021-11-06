import React, {useState} from 'react';
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

const Card = ({produto}) => {
  const [isOpenDetalhes, setIsOpenDetalhes] = useState(false);
 
  return (
    <>
    <ContainerCard>
     <ImageCard src={produto ? `${BACKEND}/${produto.foto.path}`.replace('public\\', 'files/').replace('uploads\\', '') : beerDefault} alt="imagem-detalhes-produtos"/>  
      <ContainerDescriptionCard>
        <span>{produto && produto.nome}</span>
        <span className="valorProduto">R$ {produto && produto.valor}</span>
     
      <ContainerButtonCard>
        <ButtonCard onClick={() => setIsOpenDetalhes(true)}>
          
          &nbsp; DETALHES
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

export default Card;