import React from 'react';
import Card from '../components/Card';
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
    <Card />
    </>
  )
}

export default Inicio