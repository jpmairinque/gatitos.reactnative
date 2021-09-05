import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

import TelaPadrao from "../../componentes/TelaPadrao/TelaPadrao";
import Botao from "../../componentes/Botao/Botao";

import estilos from "./estilos";

const CompraFinalizada = ({ route, navigation }) => {
  const [metodoPag, setMetodoPag] = useState();

  return (
    <>
      <TelaPadrao>
        <View style={estilos.wrapper}>
          <View style={estilos.box}>
            <View style={estilos.topbox}>
              <Text style={estilos.title}>Compra Finalizada!</Text>
              <Text style={estilos.preco}>
                {" "}
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(route.params.precoFinal)}
              </Text>
            </View>

            <View style={estilos.paybox}>
            <Text style={estilos.metodo}>Escolha o método de pagamento:</Text>
            <View style={estilos.payview}>
           
              <TouchableOpacity
                onPress={() => {
                  setMetodoPag(1);
                }}
              >
                <Image
                  source={require("/home/jpmairinque/gatitos/gatitos/assets/paypal.png")}
                />
                {metodoPag == 1 && <View style={estilos.bottombar} />}
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setMetodoPag(2);
                }}
              >
                <Image style={{margin:5}}
                  source={require("/home/jpmairinque/gatitos/gatitos/assets/applepay.png")}
                />
                {metodoPag == 2 && <View style={estilos.bottombar} />}
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setMetodoPag(3);
                }}
              >
                <Image
                  source={require("/home/jpmairinque/gatitos/gatitos/assets/picpay.png")}
                />
                {metodoPag == 3 && <View style={estilos.bottombar} />}
              </TouchableOpacity>
              </View>
            </View>
            <View style={estilos.buttonbox}>
            <Botao
              estilos={{ width:'60%' }}
              valor={"Voltar para a loja"}
              acao={() => {
                navigation.navigate("Home");
              }}
            />

            {metodoPag && <Botao
              estilos={{ width:'30%', backgroundColor: 'green', color:'blue' }}
              valor={"Pagar"}
              acao={() => {
                navigation.navigate("Home");
              }}
            />}

            </View>   
          </View>
        </View>
      </TelaPadrao>
    </>
  );
};

export default CompraFinalizada;
