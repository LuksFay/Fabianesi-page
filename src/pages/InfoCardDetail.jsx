import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CardAllItems } from '../components/items/CardAllItems';

const InfoCardDetail = () => {
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
                                    <p>{item.type}</p>
                                    <h3>{item.title}</h3>
                                    <p>{item.descr}</p>
                                    <p>{item.price}</p>
                                </div>
                            </div>
                            <div className="detail__card__sepcs">
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
                                {item.example.map(i => {
                                    return (
                                        <li key={i.id}>
                                            <span>{i.content}</span>
                                        </li>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default InfoCardDetail