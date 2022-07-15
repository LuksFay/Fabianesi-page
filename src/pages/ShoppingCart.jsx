import React from 'react';
import '../styles/ShoppingCart.css'
import {Link} from 'react-router-dom';


const ShoppingCart = ( { cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance } ) => {

  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
     0
     );
  return (
    <>
                <Link to={'/test'}>
                    test
                </Link>
        <div className='cart-items'>
          <h2 className='cart-items-header'>Sus productos en el carrito</h2>
          
          {cartItems.length === 0 && (
           <h2 className='cart-items-empty'>No hay ningun producto en su carrito.</h2>
          )}
          <div>

            {cartItems.map((item)=>(
              <div key={item.id} className="cart-items-container">

                <div className="cart-items-list">
                <img  className='cart-items-image' src={require('../assets/' + item.image + '.png')} alt={item.title} />
                <p className='cart-item-name'>
                 {item.title}
                </p>
                </div>

                <div className='cart-items-function'>
                  <div className='cart-items-btn'>
                    <button className='cart-items-add' onClick={()=>handleAddProduct(item) }>+</button>
                    <p className='cart-item-price'>{item.quantity}</p>
                    <button className='cart-items-remove' onClick={()=>handleRemoveProduct(item) }>-</button>
                  </div>
                  <p>${item.price}</p>
                </div>

              </div>
            ))}


            <div className='cart-items-total-price'>
              <p>Precio Total</p> 
              <p>${totalPrice}</p> 
            </div>

            <div className='cart-actions'>
              
            <div className='clear-cart'>
                {cartItems.length >=1 && (
                <button className='buy-cart-button'>Comprar</button>
                )}
            </div>
              
              <div className='clear-cart'>
                {cartItems.length >=1 && (
                <button className='clear-cart-button' onClick={handleCartClearance}>Vaciar carrito</button>
                )}
              </div>

            </div>

          </div>
        </div>
    </>
  )
}

export default ShoppingCart