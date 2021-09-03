import React, { useContext, useState, useEffect } from 'react'
import {Text, View, TouchableOpacity, TextInput, StatusBar,SafeAreaView, FlatList, Button} from 'react-native'
import Botao from '../../../componentes/Botao/Botao'
import CampoInteiro from '../../../componentes/CampoInteiro/CampoInteiro'
import estilos from './estilos'



const Item = ({nome,preco,descricao,quantidade}) =>{

   
    const [total, setTotal] = useState(preco)

    useEffect(() => {
        calculaTotal()
    }, [quantidade])


    const calculaTotal = () => {
        setTotal(quantidade*preco)
    }

    return (
        <>
    <View style={estilos.informacao}>
        <Text style={estilos.nome}>{nome}</Text>
        <Text style={estilos.descricao}>{descricao}</Text>
        <Text style={estilos.preco}>{Intl.NumberFormat('pt-BR',{style:'currency', currency:'BRL'}).format(preco)}</Text>
        
    </View>

    <View style={estilos.carrinho}>
        <View>
        <View style={estilos.valor}>
           <Text style={estilos.descricao}>Quantidade:</Text>
           <Text estilos={estilos.quantidade}>{quantidade}</Text>
        </View>
        <View style={estilos.valor}>
           <Text style={estilos.descricao}>Total:</Text>
           <Text style={estilos.preco}>{Intl.NumberFormat('pt-BR',{style:'currency', currency:'BRL'}).format(total)}</Text>
          
        </View>
        </View>
        <Botao valor="Remover do carrinho" acao={()=>{}}/>
    </View>
        
    <View style={estilos.divisor}/>
    
    </>
    
   
    )
}

export default Item