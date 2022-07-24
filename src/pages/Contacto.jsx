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
              <a href='mailto: luksfaydev@gmail.com'>
                <EmailIcon className='icon' />
              </a>
              <a href='https://api.whatsapp.com/send?phone=+543412019025&text=Hola!%20Vengo%20de%20la%20p%C3%A1gina.%20Quisiera%20hacer%20una%20consulta%20'
                target='_blank'
                rel="noreferrer">
                <WhatsAppIcon className='icon' />
              </a>
              <a href='tel: 3412019025'>
                <CallIcon className='icon'/>
              </a>
            </div>
            <p>Si deseas adjuntar algun tipo de archivo recomendamos que uses la opción de eMail y que para estar más seguros dejes una constancia en un mensaje de WhatspApp</p>
        </div>
    </section>
    </>
  )
}

export default Contacto