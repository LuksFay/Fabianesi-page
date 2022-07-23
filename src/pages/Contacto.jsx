import React from 'react';
import '../styles/Contacto.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
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
              <EmailIcon/>
              <WhatsAppIcon />
              <CallIcon/>
            </div>
            <p>Si deseas adjuntar algun tipo de archivo recomendamos que uses la opción de eMail y que para estar más seguros dejes una constancia en un mensaje de WhatspApp</p>
        </div>
    </section>
    </>
  )
}

export default Contacto