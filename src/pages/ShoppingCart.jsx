import React from 'react';
import '../styles/ShoppingCart.css'


const ShoppingCart = ( { cartItems, handleAddProduct, handleRemoveProduct } ) => {

  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
     0
     );
  return (
    <>
        <div className='cart-items'>
          <div className='cart-items-header'>Cart Items</div>

          {cartItems.length === 0 && (
           <div className='cart-items-empty'>No items are added.</div>
          )}
          <div>
            {cartItems.map((item)=>(
              <div key={item.id} className="cart-items-list">
                <img  className='cart-items-image' src={require('../assets/' + item.image + '.png')} alt={item.title} />
                <div className='cart-item-name'>
                {item.title}
                </div>
                <div className='cart-items-function'>
                  <button className='cart-items-add' onClick={()=>handleAddProduct(item) }>+</button>
                  <button className='cart-items-remove' onClick={()=>handleRemoveProduct(item) }>-</button>
                </div>
                <div className='cart-item-price'> {item.quantity} * ${item.price}</div>
              </div>
            ))}
            <div className='cart-items-total-price-name'>
              Total Price
              <div className='cart-Items-total-price'>
                ${totalPrice}
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default ShoppingCart