import React, { useReducer } from 'react';
import {
  shoppingInitialState,
  shoppingReducer
} from '../reducers/shoppingReducer';
import CardCatalogo from '../components/cards/CardCatalogo'


const ShoppingCart = () => {
  const [state,dispatch] = useReducer(shoppingReducer, shoppingInitialState);
  const {products, cart} = state;
  const addToCart = ()=> {
    console.log('hola')
  }
  const delFromCart = ()=> {
    
  }
  const clearCart = ()=> {
    
  }
  return (
    <>
      <div className="container__shopping__cart">
        <h2>Shopping Cart</h2>
        <h3>Productos</h3>
        <h3>Carrito</h3>
        <article></article>
      </div>
    </>
  )
}

export default ShoppingCart