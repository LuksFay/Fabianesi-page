import React from 'react';
import '../styles/ShoppingCart.css'


const ShoppingCart = ( { cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance } ) => {

  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
     0
     );

  let cartArrayForWSP = [];
  let cartStrForWsp = "";
   cartItems.forEach(element => {
    cartArrayForWSP.push(element.quantity + ' unidades de '+ element.title + ' $ '  + element.price + ' ⚙️ ');
    cartStrForWsp=cartArrayForWSP;
  }); 
     


  return (
    <>
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
                <a className='buy-cart-button'  href={`https://api.whatsapp.com/send?phone=+543412019025&text=
                Hola!%20
                Vengo%20
                de%20
                la%20
                p%C3%A1gina.%20
                Quisiera%20
                continuar%20
                con%20
                la%20
                compra%20
                de%20
                los%20
                siguientes%20
                productos:%20
                *${cartStrForWsp}}*`}
                target='_blank'>Comprar</a>
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