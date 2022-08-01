import React from 'react';
import '../styles/Empresa.css';

const Contacto = () => {
  return(
    <>
      <section className='empresa-section'>
        <div className='empresa-div-principal'>
          <h2 className='empresa-titulo'>Sobre Nosotros</h2>
          <p className='empresa-descripcion'>
            Hola, mi nombre es Fabian Molinari y soy el dueño de FabianesiTools. <br />
            <img  className='foto-perfil' src={require('../assets/imagenes_de_empresa/fabian.jpg')} alt="Foto de Fabían" />
            Somos una empresa líder en el desarrollo de diseños electrónicos para GNC.  <br />
            FabianesiTools ofrece una amplia gama de productos de alta calidad, que incluyen herramientas, equipos y accesorios para GNC. Nuestros productos están diseñados para satisfacer las necesidades de nuestros clientes y ofrecer un valor excelente. Estamos orgullosos de ofrecer el mejor servicio al cliente y la más alta calidad en todos nuestros productos. <br />
            Estaré acompañándote en tu proceso de compra y podrás contactarme siempre que lo necesites. Puede encontrar mi número de teléfono en la sección "contacto" de nuestro sitio web.
          </p>
          
          <h2 className='empresa-titulo'>Fotos Nuestras</h2>
          <div className='fotos-empresa'>
            <img  className='foto-empresa' src={require('../assets/imagenes_de_empresa/productos_1.jpg')} alt="Foto del local" />
            <img  className='foto-empresa' src={require('../assets/imagenes_de_empresa/productos_2.jpg')} alt="Foto del local" />
            <img  className='foto-empresa' src={require('../assets/imagenes_de_empresa/productos_3.jpg')} alt="Foto del local" />
            <img  className='foto-empresa' src={require('../assets/imagenes_de_empresa/productos_4.jpg')} alt="Foto del local" />
            <img  className='foto-empresa' src={require('../assets/imagenes_de_empresa/productos_5.jpg')} alt="Foto del local" />
          </div>
        </div>
      </section>
    </>
    )
}
export default Contacto