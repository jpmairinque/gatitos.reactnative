import React, { useState } from "react";
import { createContext } from "react";

export const ItemsContext = createContext()

const ItemsContextProvider = ({children}) =>{

    const [carrinhoItems,setCarrinhoItems] = useState([
        {
            id:0,
            nome:"Banho",
            preco: 79.9,
            descricao: "Banho no gato",
            quantidade: 0
        },
        {
            id:1,
            nome:"Vacina B4",
            preco: 89.9,
            descricao: "Seu gato precisa de duas dessa",
            quantidade: 0
        },
        {
            id:2,
            nome:"Vacina Antirrábica",
            preco: 99.9,
            descricao: "Seu gato precisa de duas dessa",
            quantidade: 0
        },

    ] )

    return(
        <ItemsContext.Provider value={{carrinhoItems,setCarrinhoItems}}>
            {children}
        </ItemsContext.Provider>
    )

}

export default ItemsContextProvider