import React, { useState } from 'react'
import {Text, View, TextInput, StatusBar,SafeAreaView, FlatList, Button} from 'react-native'
import CampoInteiro from '../../../componentes/CampoInteiro/CampoInteiro'
import estilos from './estilos'

const Item = ({nome,preco,descricao}) =>{

    const [quantidade, setQuantidade] = useState(1)

    return (
        <>
    <View style={estilos.informacao}>
        <Text style={estilos.nome}>{nome}</Text>
        <Text style={estilos.descricao}>{descricao}</Text>
        <Text style={estilos.preco}>{preco}</Text>
        
    </View>

    <View style={estilos.carrinho}>
        <View style={estilos.valor}>
           <Text style={estilos.descricao}>Quantidade:</Text>
           <CampoInteiro acao={setQuantidade} valor={quantidade}/>
        </View>
        <View style={estilos.valor}>
           <Text style={estilos.descricao}>Preco:</Text>
           <Text style={estilos.preco}>0</Text>
        </View>
        <Button title="Adicionar"/>
    </View>
    <View style={estilos.divisor}/>
    
    </>
    
   
    )
}

export default Item