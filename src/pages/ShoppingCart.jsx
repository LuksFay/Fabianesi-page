import React from 'react';



const ShoppingCart = ( { cartItems } ) => {

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
                <p>{item.title}</p>
                <img  className='cart-items-image' src={require('../assets/' + item.image + '.png')} alt={item.title} />
                <p>$ {item.price}</p>
              </div>
            ))}
          </div>
        </div>
    </>
  )
}

export default ShoppingCart