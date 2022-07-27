import React from 'react';
import '../styles/Envios.css';

const Envios = () => {
  return(
    <>
      <section className='envios-section'>
        <div className='envios-div-principal'>
          <h2 className='envios-titulo'>
            ¿Cómo llega mi pedido?
          </h2>
          <p className='envios-descripcion'>
            FabianesiTools al ser la minorista directa de Zetronic GNC Argentina utiliza los mismos medios para el envio de los productos.
          </p>
         
          <h3>DISTRIBUIDORES:</h3>
           <div className='div-provincia'> 
            <h4>BUENOS AIRES</h4>
            <div className='div-ciudades'>
              <div className='div-ciudad'>
                <h5>BAHIA BLANCA Y PATAGONIA:</h5> 
                <ul>
                  <li>
                    Gabriel Lucchetti | Tel.:(0291) 455-5392 | Cel.: (0291) 156-483567.
                  </li>
                  <li>
                    Emilio Osre | Cel.:(0291) 154-322106.
                  </li>
                </ul>
              </div>
              <div className='div-ciudad'>
                <h5>MAR DEL PLATA:</h5>
                <ul>
                  <li>
                    Luis R. Torres | Tel.:(0223) 481-2351 | Cel.: (0223) 156-186754.
                  </li>
                </ul>
              </div>
              <div className='div-ciudad'>
                <h5>GBA:</h5>
                <ul>
                  <li>
                    Taller Plus | Tel.:(011) 4842-2867 | Cel.: (011) 155-4932744.
                  </li>
                  <li>
                    Zona Oeste: Daniel Morganti | Tel.: (011) 4696-4859 | Cel.: (011) 155-6543711.
                  </li>
                </ul>
              </div>
              <div className='div-ciudad'>
                <h5>C.A.B.A.:</h5>
                <ul>
                  <li>
                    Meteoro Herramientas - Ruben Risolio | Cel.: 156-9917830.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='div-provincia'>
            <h4>SANTA FE</h4>
            <div className='div-ciudad'>
              <h5>SANTA FE</h5>
              <ul>
                <li>
                  Herramientas Santa Fe | Manuel Angeletti | Tel.: (0342) 48-94226 | 154-270321.
                </li>
              </ul>
            </div>
            <div className='div-ciudad'>
              <h5>ROSARIO:</h5>
              <ul>
                <li>
                  Distribuidora Hepea | Cordiviola 1227(2000) | Tel.: (0341) 4-30730 | Cel.: (0341) 156-033028 | Responsable Comercial: Lautaro Bordoni.
                </li>
              </ul>
            </div>
            <div className='div-ciudad'>
              <h5>VENADO TUERTO:</h5>
              <ul>
                <li>
                  Leandro Rivoira | Tel.: (03462) 4-62057 | Cel.: 156-30702.
                </li>
                <li>
                  Marcelo Giobe | Tel.:(03462) 4-30854 | Cel.: (0341) 156-64820
                </li>
              </ul>
            </div>
          </div>
          <div className='div-provincia'>
            <h4>CORDOBA</h4>
            <div className='div-ciudad'>
            CORDOBA CAPITAL:
              • Checa Inyección SRL | Raul Checa | Tel.: (0351) 466-2083 | Cel.: 155-306264
              • GS Equipment SRL | Gustavo Soria | Tel.: (0351) 644-3405 | Cel.: 156-162154
              • Grupo Alcazar | Luis Alcazar | Tel.: (0351) 471-7856 | Cel.: 155-921219
            
            SAN LUIS
            
            VILLA MERCEDES: 
              • La Casa del Carburador | Roberto Gonzalez | Tel.: (02657) 4-30679
            
            SAN JUAN
            
              • Herramientas de Cuyo | Orlando Caballero | Tel.: (0264) 4-250760 | Cel.: 155-071358
            
            CHACO Y FORMOSA
            
              • EM Equipamientos Mecanica | Eduardo Bobbis | Tel.: (0362) 4466-7782 | Cel.: 154-522419.
            
            SALTA
            
              • Work Herramientas | Marcos Gomez | Tel.: (0387) 431-8083 | Cel.: 154-078202
            TUCUMAN
            
            SAN MIGUEL DE TUCUMAN:
              • Distribuidora Diesel Emyda | Guillermo Abraham | Tel.: (0381) 433-1235 | (0381) 451-8893 | E-mail: deing@arnet.com.ar
              • Meil Distribuciones/Belgrano Inyección | Sr. Enrique Liesegang | Moreno 630 | Tel.: (0381) 4-850169 | Cel.: (0381) 156-542941
            ENTRE RIOS
            
              • Milton Jacquet | Cel.: (03447) 154-07213
          
        </div>
      </section>
    </>
    )
}
export default Envios