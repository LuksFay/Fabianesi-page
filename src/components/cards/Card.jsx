import React from 'react';
import '../../styles/Card.css';
import InfoIcon from '@mui/icons-material/Info';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const Card = (props) => {
  return (
    <>
        <div className='card__section'>
            {props.items.map(item => {
                return(
                <div className="product__card" key={item.id}>
                    <div className="product__tumb">
                        <img src={require('../../assets/' + item.image + '.png')} alt={item.title} />
                    </div>
                    <div className="product__details">
                        <span className="product__category">{item.type}</span>
                        <h3>{item.title}</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, dicta?</p>
                        <div className="product__bottom__details">
                            <div className="product__price">{'$' + item.price}</div>
                            <div className="product__links">
                                <Link to='/'><InfoIcon /></Link>
                                <Link to='/'><ShoppingCartIcon /></Link>
                            </div>
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