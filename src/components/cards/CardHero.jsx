import React from 'react';
import HeroImg from '../../assets/escaneres/escaner_autolink_529.png'
import '../../styles/CardHero.css';

const CardHero = () => {
  return (
    <>
        <div className="container">
            <div className="imgBx">
                <img src={HeroImg} alt="escaner autolink escaner_autolink_539B" />
            </div>
            <div className="details">
                <div className="content">
                    <h2>Escaner Autolink 529 <br/>
                        <span>Nuevo Escaner</span>
                    </h2>
                    <p>
                    El escáner AutoLink AL529 OBD II/EOBD admite los diez modos de prueba de OBD II para ofrecer un diagnóstico completo. Con una exclusiva llave de preparación I/M con un solo clic patentada, una pantalla a color TFT y altavoces integrados, AutoLink AL519 es verdaderamente lo último en potencia y asequibilidad, y permite que los usuarios realicen su trabajo más rápido. Además, las miles de sugerencias de código para la solución de problemas ayudan a los técnicos a ahorrar tiempo de diagnóstico y reparación.
                    </p>
                    <h3>$ 21.315,00</h3>
                    <a href='https://api.whatsapp.com/send?phone=+543412019025&text=Hola!%20Vengo%20de%20la%20p%C3%A1gina.%20Quisiera%20continuar%20con%20la%20compra%20del%20siguiente%20producto:%20*Escaner Autolink 529 - $21.315,00*' target='_blank' rel="noreferrer">Comprar Ahora</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default CardHero