import React from "react";
import { TextInput } from "react-native";

import estilosPadrao from "./estilos";

const CampoInteiro = ({ valor, acao, estilos }) => {

  const atualiza = (newValue, acaoRetorno) => {

    const verificaInteiro = newValue.match(/^[0-9]*$/);
    if (!verificaInteiro) return;

    const removeZeroEsquerda = newValue.replace(/^(0)(.+)/, "$2");
    acaoRetorno(removeZeroEsquerda);

  };
  
  const numberString = String(valor);

  return (
    <TextInput
      style={[estilosPadrao.campo, estilos]}
      keyboardType="number-pad"
      selectTextOnFocus
      onChangeText={(value) => {
        atualiza(value, acao);
      }}
      value={numberString}
    />
  );
};

export default CampoInteiro;
