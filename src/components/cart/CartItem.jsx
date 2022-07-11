import React from 'react'

function CartItem({data, delFromCart}) {
  let {id, title, price} = data;
    return (
    <>
    <h4>{title}</h4>
    <h5>${price}</h5>
    <button delFromCart={delFromCart}>Eliminar</button>
    </>
  )
}

export default CartItem