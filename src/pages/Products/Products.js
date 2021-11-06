import React, {useState, useEffect} from 'react';
import imgLogo from '../../assets/image-logo-happyhour.png';
import {ContainerApp, ContainerPage, WrapperNavbar, WrapperLinksNav, SectionOfertas, WrapperItensOferta, SectionProdutos, WrapperNavCategorias} from './styles'
import { IoLogIn, IoCartSharp, IoBeer, IoWine, IoBeerOutline, IoBasketSharp } from 'react-icons/io5';
import { BiDrink } from "react-icons/bi";
import Card from '../../components/Card/Card';
import WrapperProdutos from '../../components/WrapperProdutos/WrapperProdutos.js'
import Footer from '../../components/Footer/Footer';
import ModalCarrinho from '../../components/ModalCarrinho/ModalCarrinho';

const Products = () => {
  const [viewCategoriaCerveja, setViewCategoriaCerveja] = useState(true)
  const [viewCategoriaDestilados, setViewCategoriaDestilados] = useState(false)
  const [viewCategoriaVinhos, setViewCategoriaVinhos] = useState(false)
  const [viewCategoriaNoAlcool, setViewCategoriaNoAlcool] = useState(false)
  const [viewCategoriaDiversos, setViewCategoriaDiversos] = useState(false)
  const [isOpenCarrinho, setIsOpenCarrinho] = useState(false)
  
  useEffect(() => {
    document.title = 'HappyHour - Produtos'
  }, [])

  return (
    <ContainerApp>
      <ContainerPage>
          <WrapperNavbar>
            <a href="/">
              <img src={imgLogo} type="image/png" href="/" alt="logo-happyhour"/>
            </a>
            <WrapperLinksNav>
            <button onClick={() => setIsOpenCarrinho(true)}><IoCartSharp size={24} /></button>
              &nbsp;
              <a href="/signin"><button ><IoLogIn size={24} /></button></a>
            </WrapperLinksNav>
          </WrapperNavbar>
          <SectionOfertas>
            <h2>Ofertas</h2>
            <WrapperItensOferta>
              <Card />
              <Card />
              <Card />
            </WrapperItensOferta>
          </SectionOfertas>
          <SectionProdutos>
            <WrapperNavCategorias>
              <button style={viewCategoriaCerveja ? {color: '#eba200', border: '3px solid #eba200'} : {color: '#00389e'}}onClick={() => {
                setViewCategoriaCerveja(true)
                setViewCategoriaDestilados(false)
                setViewCategoriaVinhos(false)
                setViewCategoriaNoAlcool(false)
                setViewCategoriaDiversos(false)
              }}><IoBeer size={24}/>&nbsp;Cerveja</button>
              <button style={viewCategoriaDestilados ? {color: '#eba200', border: '3px solid #eba200'} : {color: '#00389e'}} onClick={() => {
                setViewCategoriaCerveja(false)
                setViewCategoriaDestilados(true)
                setViewCategoriaVinhos(false)
                setViewCategoriaNoAlcool(false)
                setViewCategoriaDiversos(false)
              }}><BiDrink size={24}/>&nbsp;Destilados</button>
              <button style={viewCategoriaVinhos ? {color: '#eba200', border: '3px solid #eba200'} : {color: '#00389e'}} onClick={() => {
                setViewCategoriaCerveja(false)
                setViewCategoriaDestilados(false)
                setViewCategoriaVinhos(true)
                setViewCategoriaNoAlcool(false)
                setViewCategoriaDiversos(false)
              }}><IoWine size={24}/>&nbsp;Vinhos</button>
              <button style={viewCategoriaNoAlcool ? {color: '#eba200', border: '3px solid #eba200'} : {color: '#00389e'}} onClick={() => {
                setViewCategoriaCerveja(false)
                setViewCategoriaDestilados(false)
                setViewCategoriaVinhos(false)
                setViewCategoriaNoAlcool(true)
                setViewCategoriaDiversos(false)
              }}><IoBeerOutline size={24}/>&nbsp;Sem Alcool</button>
              <button style={viewCategoriaDiversos ? {color: '#eba200', border: '3px solid #eba200'} : {color: '#00389e'}} onClick={() => {
                setViewCategoriaCerveja(false)
                setViewCategoriaDestilados(false)
                setViewCategoriaVinhos(false)
                setViewCategoriaNoAlcool(false)
                setViewCategoriaDiversos(true)
              }}><IoBasketSharp size={24}/>&nbsp;Diversos</button>
            </WrapperNavCategorias>
            {viewCategoriaCerveja && <WrapperProdutos categoria="Cerveja"/>}
            {viewCategoriaDestilados && <WrapperProdutos categoria="Destilado"/>}
            {viewCategoriaVinhos && <WrapperProdutos categoria="Vinho"/>}
            {viewCategoriaNoAlcool && <WrapperProdutos categoria="No-alcool"/>}
            {viewCategoriaDiversos && <WrapperProdutos categoria="Diversos"/>}
          </SectionProdutos>
          <Footer/>
      </ContainerPage> 
      <ModalCarrinho
        isOpenCarrinho={isOpenCarrinho}
        setIsOpenCarrinho={setIsOpenCarrinho}
/> 
    </ContainerApp>
  );
};

export default Products;
