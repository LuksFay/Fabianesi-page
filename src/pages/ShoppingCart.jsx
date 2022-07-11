import React from 'react';



const ShoppingCart = ( { cartItems, handleAddProduct, handleRemoveProduct } ) => {

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
                <p>$ {item.price}</p>
              </div>
            ))}
          </div>
        </div>
    </>
  )
}

export default ShoppingCart