import React from 'react'
import {Text,StatusBar,SafeAreaView, FlatList} from 'react-native'
import Item from './Item/Item'

const Servicos = () =>{

    const servicos = [
        {
            id:1,
            nome:"Banho",
            preco: 79.9,
            descricao: "Banho no gato"
        },
        {
            id:2,
            nome:"Vacina B4",
            preco: 89.9,
            descricao: "Seu gato precisa de duas dessa"
        },
        {
            id:3,
            nome:"Vacina Antirrábica",
            preco: 99.9,
            descricao: "Seu gato precisa de duas dessa"
        },

    ]
    return (
    <SafeAreaView>
    <StatusBar/>
    <Text>Servicos!</Text>
    <FlatList 
    data ={servicos}
    renderItem={({item})=><Item {...item}/>}
    keyExtractor={({id})=>String(id)}/>
    </SafeAreaView>
    
   
    )
}

export default Servicos