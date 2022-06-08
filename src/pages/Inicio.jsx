import React from 'react';
import Card from '../components/Card';
import {Link} from 'react-router-dom';
import '../styles/Inicio.css';

const Inicio = () => {
  return (
    <>
    <section className='inicio-section'>
        <div className="container">
            <div className="info">
                <h1 className='title'>Escaner Autolink AL529HD</h1>
                <p className='description'>El AL529HD no solo diagnostica vehículos compatibles con OBDII/EOBD, sino también vehículos pesados que utilicen protocolos estándar SAE-J1939 y SAE-J1708.</p>     
                <button className="btn-hero">Comprar</button>
                <ul className='list'>
                    <li className='item-list'>Determina fácilmente la causa de una luz de fallo de motor/indicadora de fallo.</li>
                    <li className='item-list'>Apaga luces de fallo de motor, borra códigos y reinicia monitores.</li>
                    <li className='item-list'>Muestra datos en imagen fija.</li>
                    <li className='item-list'>Lee, guarda y reproduce datos de sensores en tiempo real.</li>
                    <li className='item-list'>Definiciones DTC y menús multilingües en inglés, español, francés, etc.</li>
                </ul>   
            </div>
            <div className="img-container"></div> 
        </div>
    </section>
    <h2 className="title-section-card">Nuevos Productos</h2>
    {/* <Card /> */}
    <div className="btnLink-container">
          <button className='btn-link'>
              <Link to='/catalogo'>Ver Todo</Link>
          </button>
    </div>
    <h2 className="title-section-card">Productos Destacados</h2>
    {/* <Card /> */}
    <section className='empresa-container'>
          <div className='info-empresa'>
              <div className="text-empresa">
                  <h3 className='title-empresa'>Fabianesi Tools</h3>
                  <p className='descr-empresa'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non amet harum tenetur. Blanditiis, placeat vero. Cumque aliquam eveniet dicta vel vitae doloribus debitis laborum magni qui, aut dolore et adipisci.</p>
              </div>
          </div>
          <div className="map-empresa"></div>
    </section>
    </>
  )
}

export default Inicio