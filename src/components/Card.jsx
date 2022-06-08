import React from 'react';
// import { CardItemsHero } from './CardItemsHero';
import {CardAllItems} from './CardAllItems';
import '../styles/Card.css';

const Card = () => {
  return (
    <>
        <div className='card-section'>
            {CardAllItems.map(item => {
                return(
                <div className="container-card" key={item.id}>
                    <div className="img-card">
                        <img src={require('../assets/' + item.image + '.png')} alt={item.title} />
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
        </div>
    </>
  )
}

export default Card