import React from 'react';
import brahmaImage from '../../assets/brahma_600ml.jpg';
import { IoCartSharp } from 'react-icons/io5';
import {
  ContainerCard,
  ImageCard,
  ContainerDescriptionCard,
  ContainerButtonCard,
  ButtonCard,
} from './styles.js';

const Card = () => {
  return (
    <ContainerCard>
      <ImageCard src={brahmaImage} />
      <ContainerDescriptionCard>
        <span>BRAHMA</span>
        <span>R$ 7,00</span>
      </ContainerDescriptionCard>
      <ContainerButtonCard>
        <ButtonCard>
          <IoCartSharp size={20} />
          &nbsp; COMPRAR
        </ButtonCard>
      </ContainerButtonCard>
    </ContainerCard>
  );
};

export default Card;
