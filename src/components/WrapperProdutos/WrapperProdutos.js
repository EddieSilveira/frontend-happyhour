import React, {useState, useEffect} from 'react'
import {WrapperProdutosCategoria} from './styles'
import Card from '../Card/Card';
import { BACKEND } from '../../constants';

const WrapperProdutos = ({categoria}) => {
    const [listaProdutos, setListaProdutos] = useState([])
    const url = `${BACKEND}/produtos`;

    function filtrarCategoria(){
        listaProdutos.forEach((item) => {

            //CONTINUAR A PARTIR DAQUI FILTRAR CATEGORIA DE PRODUTO
            const filtered = 
                Object.entries(item).filter((item) => console.log(item))
                
            console.log(filtered)
        })
    }
    filtrarCategoria()

    async function carregarProdutos(){
        const response = await fetch(url)
        const data = await response.json()
        setListaProdutos(data)
        
    }

    useEffect(() => {
        carregarProdutos()
    }, [])

    return (
        <WrapperProdutosCategoria>
            <Card/>
            <Card/>
            <Card/> 
            <Card/>
        </WrapperProdutosCategoria>
    )
}

export default WrapperProdutos
