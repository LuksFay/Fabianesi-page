import React from 'react';
import { CardItemsHero } from './CardItemsHero';
import {Link} from 'react-router-dom';
import '../styles/Card.css';

const Card = () => {
  return (
    <>
    <h2 className="title-section-card">Nuevos Productos</h2>
        <section className='card-section'>
            {CardItemsHero.map(item => {
                return(
                <div className="container-card" key={item.id}>
                    <div className="img-card">
                        <img src={require('../assets/escaneres/' + item.image + '.png')} alt={item.title} />
                    </div>
                    <div className="info-card">
                        <h3 className="title-card">{item.title}</h3>
                        <p className="price-card">{'$' + item.price}</p>
                        <div className="buttons-card">
                            <button className="more-button">Info</button>
                            <button className="buy-button">Comprar</button>
                        </div>
                    </div>
                </div>
                )
            })}       
        </section>
        <div className="btnLink-container">
            <button className='btn-link'>
                <Link to='/catalogo'>Ver Todo</Link>
            </button>
        </div>

        <h2 className="title-section-card">Productos Destacados</h2>
        <section className='card-section'>
            {CardItemsHero.map(item => {
                return(
                <div className="container-card" key={item.id}>
                    <div className="img-card">
                        <img src={require('../assets/escaneres/' + item.image + '.png')} alt={item.title} />
                    </div>
                    <div className="info-card">
                        <h3 className="title-card">{item.title}</h3>
                        <p className="price-card">{'$' + item.price}</p>
                        <div className="buttons-card">
                            <button className="more-button">Info</button>
                            <button className="buy-button">Comprar</button>
                        </div>
                    </div>
                </div>
                )
            })}       
        </section>

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

export default Card