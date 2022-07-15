import React from 'react'



function Probando({cartItems}) {
  let title = [];
  let titleStr = "";
  cartItems.forEach(element => {
    title.push(element.quantity + ' unidades de '+ element.title + ' $ '  + element.price + ' ⚙️ ');
    titleStr=title;
  });
  
  
  return (
    <div>Probando
        <div>
        {cartItems.map((item, index) => 
        (
        <p key={index}>{item.title}-{item.price}-{item.quantity}</p>
        ))}
        </div>
        <a href={`https://api.whatsapp.com/send?phone=+543412019025&text=
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
        *${titleStr}}*`}
        target='_blank'>prueba a wsp</a>

      
    
    </div>
  )
}

export default Probando

