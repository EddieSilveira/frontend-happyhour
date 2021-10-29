import React from 'react';
import { LoaderContainer } from './style';
import spin from '../../assets/spin.gif';

export const Loader = () => {
  return (
    <LoaderContainer>
      <img src={spin} alt="loader" />;
    </LoaderContainer>
  );
};
