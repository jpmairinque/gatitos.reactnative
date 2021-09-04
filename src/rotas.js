import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import ItemsContextProvider from './contexts/ItemsContext';

import Servicos from './telas/Servicos/Servicos';
import Carrinho from './telas/Carrinho/Carrinho';
import CompraFinalizada from './telas/CompraFinalizada/CompraFinalizada';

import { cores } from './telas/Servicos/estilos';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator()

const Tabs = () => {
    return(
 
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
    
       
    )


}

const Rotas = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
                <Stack.Screen
                name="Home"
                component={Tabs}
              />
              <Stack.Screen
                name="CompraFinalizada"
                component={CompraFinalizada}
                
              />

            </Stack.Navigator>
        </NavigationContainer>
     
        
    )
}

export default Rotas
