import React, { useContext } from 'react'
import { ItemsContext } from '../../contexts/ItemsContext'
import {Text,StatusBar,SafeAreaView, FlatList, KeyboardAvoidingView,Platform} from 'react-native'
import Item from './Item/Item'
import StatusCarrinho from '../../componentes/StatusCarrinho/StatusCarrinho'




const Carrinho = ({navigation}) =>{


    const {carrinhoItems} = useContext(ItemsContext)



    const total = carrinhoItems.reduce((soma,{preco,quantidade})=>soma+(preco*quantidade),0)
 
    return (
        <>
           
            <StatusCarrinho navigation={navigation} total={total}/>
            <FlatList 
            removeClippedSubviews={false}
            data ={carrinhoItems}
            renderItem={({item})=><Item {...item}/>}
            keyExtractor={({id})=>String(id)}/>
            
        </>
   
    )
}

export default Carrinho