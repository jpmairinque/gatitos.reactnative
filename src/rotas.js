import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ItemsContextProvider from './contexts/ItemsContext';

import Servicos from './telas/Servicos/Servicos';
import Carrinho from './telas/Carrinho/Carrinho';

import { cores } from './telas/Servicos/estilos';

const Tab = createBottomTabNavigator();

const Rotas = () =>{
    return(
     
        <NavigationContainer>
              <ItemsContextProvider>
            <Tab.Navigator tabBarOptions={{
                activeTintColor:cores.roxo,
                inactiveTintColor:cores.claro,
                activeBackgroundColor: cores.roxo,
                inactiveBackgroundColor: cores.laranja,
                style:{
                    height: 60
                },
                labelStyle:{
                    width: '100%',
                    flex: 1,
                    fontWeight:'bold',
                    fontSize: 16,
                    lineHeight:21,
                    marginTop: 1,
                    paddingTop: 15,
                    backgroundColor: cores.laranja
                },
                keyboardHidesTabBar: true
            }}>
         
                <Tab.Screen name={"Serviços"} component={Servicos}/>
                <Tab.Screen name={"Carrinho"} component={Carrinho}/>
              
            </Tab.Navigator>
            </ItemsContextProvider>
        </NavigationContainer>
       
    )
}

export default Rotas
