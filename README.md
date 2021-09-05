# Gatitos 🐈📱
Cat petshop made with React Native (based on Alura's course)

// *Petshop para gatos construído com React Native (baseado no curso da Alura)

## App Overview // *overview da aplicação* 💻
![Desktop - 2](https://user-images.githubusercontent.com/53411709/132134322-14075bb0-9545-4a52-9d11-00e676980aed.png)
##
- 🐱 **Serviços** - Choose the right item to you cat // *escolha o item certo para seu gato*
- 🛒 **Carrinho** - Check out the total price // *confira o preço final*
- 💸 **Compra Finalizada** - Choose the payment method // *escolha o método de pagamento*

## How to run / *como executar* 💿

Go to project's directory and install all the dependencies
*//  Vá até o diretório do projeto e instale as dependências*
```
yarn | npm install
```

Next, simply start the project
*// Depois é só rodar o projeto =)*
```
expo start | npm start | yarn start
```

## Project Structure / *estrutura do projeto* 🌳

```
── src
    ├── componentes // *app components* 
    │   ├── Botao
    │   │   ├── Botao.js
    │   │   └── estilos.js
    │   ├── CampoInteiro
    │   │   ├── CampoInteiro.js
    │   │   └── estilos.js
    │   ├── StatusCarrinho
    │   │   ├── estilos.js
    │   │   └── StatusCarrinho.js
    │   └── TelaPadrao
    │       ├── estilos.js
    │       └── TelaPadrao.js
    ├── contexts // *app contexts* 
    │   └── ItemsContext.js
    ├── rotas.js // *app routes* 
    └── telas // *app screens* 
        ├── Carrinho // *shopping cart* 
        │   ├── Carrinho.js
        │   ├── estilos.js
        │   └── Item
        │       ├── estilos.js
        │       └── Item.js
        ├── CompraFinalizada // *finishing up shopping* 
        │   ├── CompraFinalizada.js
        │   └── estilos.js
        └── Servicos // *gatito's items* 
            ├── estilos.js
            ├── Item
            │   ├── estilos.js
            │   └── Item.js
            └── Servicos.js

``` 

## Tools used / *ferramentas utilizadas* 🛠
- React Native
- Expo
- Context API
- React Navigation
- Figma (design tool)



