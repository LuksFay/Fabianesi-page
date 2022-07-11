import React, { useReducer } from 'react';
import CartItem from '../components/cart/CartItem';
import {
  shoppingInitialState,
  shoppingReducer
} from '../reducers/shoppingReducer';



const ShoppingCart = () => {

  const [state,dispatch] = useReducer(shoppingReducer, shoppingInitialState);

  const {products, cart} = state;

  const delFromCart = ()=> {
    
  }
                
  const clearCart = ()=> {
                  
  }
  
  return (
    <>
      <div className="container__shopping__cart">
        <h2>Shopping Cart</h2>
        <div>
          <button>Vaciar Carrito</button>
          {
            cart.map((item, index) => <CartItem key={index} data={item} delFromCart={delFromCart} />)
          }
        </div>
      </div>
    </>
  )
}

export default ShoppingCart