import React from 'react';
import '../styles/Condiciones.css';

const Condiciones = () => {
  return (
    <>
    <section className='condiciones-section'>
        <div className='condiciones-div-principal'>
            <h2 className='condiciones-titulo'>
              ¿Cómo es el proceso de compra?
            </h2>
            <p className='condiciones-descripcion'>
              Comprar en nuestra tienda es muy sencillo. Solo tenes que añadir a tu carrito de compras los productos que quieras comprar y, una vez que hayas terminado, proceder a realizar la compra. <br />
              Al hacerlo, se te redirigirá al WhatsApp directo del vendedor, donde vas a poder acordar el medio de pago y el retiro de los productos. <br />
              Nuestra tienda ofrece una gran variedad de productos a precios muy competitivos. Todos nuestros productos son de alta calidad y están garantizados. <br />
              En nuestra tienda, la satisfacción del cliente es nuestra principal prioridad. Por eso, si tenes cualquier duda o problema, no dudes en contactar con nosotros y estaremos encantados de ayudarte.
            </p>
            <h2 className='condiciones-titulo'>
              Descargo de responsabilidad
            </h2>
            <p>
            La página funciona como un preparador de pedidos, donde las compras se arman y luego se revisan en la sección de carrito. Todos los pedidos se abonan en efectivo y se retiran por sucursal, ya que es una de las formas más efectivas que tiene la empresa para acelerar el proceso de compra y que el cliente no deba perder tiempo esperando.  <br />
            Al mismo tiempo, este paso intermedio sirve para informar al cliente en caso de haber algún problema con el stock o el precio del producto. La modalidad de pago electrónico, ya sea tarjeta o QR, se encuentra momentáneamente desactivada por las variaciones constantes en los precios, ya que son productos de altísima calidad importados.
            </p>
        </div>
    </section>
    </>
  )
}

export default Condiciones