import { StyleSheet } from "react-native";
import { cores } from "../Servicos/estilos";

export default StyleSheet.create({
  wrapper: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  box: {
    backgroundColor: cores.laranja,
    height: "70%",
    width: "90%",
    borderRadius: 5,

    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  topbox: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 28,
    marginTop: 40,
    fontWeight: "bold",
    color: cores.roxo,
  },

  preco: {
    marginTop: 40,
    fontSize: 40,
    fontWeight: "bold",
  },

  payview: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
  },

  bottombar: {
    marginTop: 60,
    left: "40%",
    width: 5,
    height: 5,
    backgroundColor: cores.roxo,
    position: "absolute",
    borderRadius: 50,
  },

  paybox: {
    marginTop: 60,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  metodo: {
    fontSize: 15,
    marginBottom: 30,
    fontStyle: "italic",
    color: "grey",
  },
  buttonbox: {
    marginBottom: 15,
    width: "90%",
    height: 40,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
