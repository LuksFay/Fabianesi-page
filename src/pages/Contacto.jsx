import React from 'react';
//import '../styles/Inicio.css';

const Contacto = () => {
  return (
    <>
    <section className='contacto-section'>
        <div className='contacto-div-principal'>
            <h3 className='contacto-titulo'>¿Cómo me comunico con la empresa?</h3>
            <p className='contacto-descripcion'>
              La empresa ofrece tres opciones de contacto: eMail, WhatsApp y llamada telefónica
            </p>
            <div className='contacto-iconos'>
              <span>e-mail icono</span>
              <span>WhatsApp icono</span>
              <span>Teléfono icono</span>
            </div>
            <p>Si deseas adjuntar algun tipo de archivo recomendamos que uses la opción de eMail y que para estar más seguros dejes una constancia en un mensaje de WhatspApp</p>
        </div>
    </section>
    </>
  )
}

export default Contacto