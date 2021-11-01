import React, {useState} from 'react';
import brahmaImage from '../../assets/brahma_600ml.jpg';
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
      <ImageCard src={brahmaImage} />
      <ContainerDescriptionCard>
        <span>{produto && produto.nome}</span>
        <span>R$ {produto && produto.valor}</span>
      </ContainerDescriptionCard>
      <ContainerButtonCard>
        <ButtonCard onClick={() => setIsOpenDetalhes(true)}>
          
          &nbsp; DETALHES
        </ButtonCard>
      </ContainerButtonCard>
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
