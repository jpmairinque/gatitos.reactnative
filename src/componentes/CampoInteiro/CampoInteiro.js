import React from 'react';
import {Text, View, TextInput, StatusBar,SafeAreaView, FlatList, Button} from 'react-native'

const CampoInteiro = ({valor,acao}) =>{

    const numberString=String(valor);


    return(
        <TextInput
        keyboardType='number-pad'
        selectTextOnFocus
        onChangeText={(value)=>{acao(value)}}
        value={numberString}/>
        
    )
}

export default CampoInteiro