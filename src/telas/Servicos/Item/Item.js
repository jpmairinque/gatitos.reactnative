import React, { useContext, useState } from 'react'

import { ItemsContext } from '../../../contexts/ItemsContext'

import {Text, View, TouchableOpacity, TextInput, StatusBar,SafeAreaView, FlatList, Button} from 'react-native'
import Botao from '../../../componentes/Botao/Botao'
import CampoInteiro from '../../../componentes/CampoInteiro/CampoInteiro'
import estilos from './estilos'

const Item = ({nome,preco,descricao,id}) =>{

    const [quantidade, setQuantidade] = useState(1)
    const [total, setTotal] = useState(preco)
    const [expandir, setExpandir] = useState(false)

    const {carrinhoItems,setCarrinhoItems} = useContext(ItemsContext)

    const atualizaQuantidadeTotal = (novaQuantidade) => {
        setQuantidade(novaQuantidade)
        calculaTotal(novaQuantidade)
    }
    const calculaTotal = (novaQuantidade) => {
        setTotal(novaQuantidade*preco)
    }

    const atualizaCarrinho = () => {

        const listaCarrinho = [...carrinhoItems]
        listaCarrinho[id].quantidade += quantidade

        setCarrinhoItems(listaCarrinho)
        
             
    }

    return (
        <>
    <TouchableOpacity style={estilos.informacao} onPress={()=>{setExpandir(!expandir); atualizaQuantidadeTotal(1)}}>
        <Text style={estilos.nome}>{nome}</Text>
        <Text style={estilos.descricao}>{descricao}</Text>
        <Text style={estilos.preco}>{Intl.NumberFormat('pt-BR',{style:'currency', currency:'BRL'}).format(preco)}</Text>
        
    </TouchableOpacity>

    {expandir && <View style={estilos.carrinho}>
        <View>
        <View style={estilos.valor}>
           <Text style={estilos.descricao}>Quantidade:</Text>
           <CampoInteiro estilos={estilos.quantidade} acao={atualizaQuantidadeTotal} valor={quantidade}/>
        </View>
        <View style={estilos.valor}>
           <Text style={estilos.descricao}>Total:</Text>
           <Text style={estilos.preco}>{Intl.NumberFormat('pt-BR',{style:'currency', currency:'BRL'}).format(total)}</Text>
          
        </View>
        </View>
        <Botao valor="Adicionar ao carrinho" acao={()=>{atualizaCarrinho()}}/>
    </View>
        }
    <View style={estilos.divisor}/>
    
    </>
    
   
    )
}

export default Item