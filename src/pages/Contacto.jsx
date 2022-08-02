import React from 'react';
import '../styles/Contacto.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const Contacto = () => {
  return (
    <>
    <section className='contacto-section'>
        <div className='contacto-div-principal'>
            <h3 className='contacto-titulo'>¿Cómo me comunico con la empresa?</h3>
            <p className='contacto-descripcion'>
            La empresa tiene como preferencia la comunicación vía whatsapp, por favor los clientes deberán comunicar sus consultas en horario laboral de 9:00 hs a 18:00 hs. Fuera de ese horario debera esperar al dia siguiente para obtener su respuesta.
            </p>
            <div className='contacto-iconos'>
              <a href='https://api.whatsapp.com/send?phone=+543412019025&text=Hola!%20Vengo%20de%20la%20p%C3%A1gina.%20Quisiera%20hacer%20una%20consulta%20'
                target='_blank'
                rel="noreferrer">
                <WhatsAppIcon className='icon' />
              </a>
            </div>
        </div>
    </section>
    </>
  )
}

export default Contacto