import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CardAllItems } from '../components/items/CardAllItems';
import '../styles/InfoCardDetails.css'

const InfoCardDetail = ({handleAddProduct}) => {
    const [id, setId] = useState(null);
    const [itemList, setItemList] = useState([]);
    const {card_id} = useParams();
    
    useEffect(() => {
        setId(card_id);
        setItemList([CardAllItems]);
    }, []);
    
    let filtered = [];

    for(let i = 0; i < itemList.length; i++){
        filtered = itemList[i].filter(item => {
            return item.id === parseInt(id);
        })
    }

    return (
        <>
            <div className='container__detail'>
                {filtered.map(item => {
                    return(
                        <div className='container__card__detail' key={item.id}>
                            <div className="imgBox__detail">
                                <img src={require('../assets/' + item.image + '.png')} alt={item.title} />
                            </div>
                            
                            <div className="detail__card__info">
                                <div className="content__card__detail">
                                    <div className='detail__card__group'>
                                        <p>{item.type}</p>
                                        <h2>{item.title}</h2>
                                        <p className='item__price'>${item.price}</p>
                                        <p>{item.descr}</p>
                                    </div>
                                    <div className='detail__buttons__group'>
                                        <a href={`https://api.whatsapp.com/send?phone=+543412019025&text=Hola!%20Vengo%20de%20la%20p%C3%A1gina.%20Quisiera%20continuar%20con%20la%20compra%20del%20siguiente%20producto:%20*${item.title}*`}target='_blank' rel="noreferrer">
                                            <button href='www.google.com' className='detail__buttons detail__buy__now'>Comprar Ahora</button>
                                        </a>
                                        <button className='detail__buttons detail__buy__later' onClick={() => handleAddProduct(item)}>Agregar al carrito</button>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='detail__extra__info'>
                             <div className="detail__card__sepcs">
                                <h3>Especificaciones</h3>
                                <p>{item.use}</p>
                                {item.specs.map(i => {
                                    return (
                                        <li key={i.id}>
                                            <span>{i.content}</span>
                                        </li>
                                    )
                                })}
                            </div>
                            <div className="detail__card__sepcs">
                                <h3>Información Extra</h3>
                                {item.example.map(i => {
                                    return (
                                        <li key={i.id}>
                                            <span>{i.content}</span>
                                        </li>
                                    )
                                })}
                            </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default InfoCardDetail