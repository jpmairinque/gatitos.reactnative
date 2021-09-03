import React from 'react';
import {Text,StatusBar,SafeAreaView, FlatList, KeyboardAvoidingView,Platform} from 'react-native'
import estilosGlobal from '../../telas/Carrinho/estilos'
import {cores} from '../../telas/Servicos/estilos'
import estilos from './estilos';

const TelaPadrao = ({children}) =>{

    return(
    <SafeAreaView style={estilos.ajusteTela}>
    <StatusBar backgroundColor={cores.roxo}/>
    <KeyboardAvoidingView 
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={estilosGlobal.preencher}
    >
        {children}
    </KeyboardAvoidingView>
    </SafeAreaView>
    )


}

export default TelaPadrao