import React from 'react';
import '../../styles/Card.css';
import { CardAllItems } from '../items/CardAllItems';
import InfoIcon from '@mui/icons-material/Info';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import {Toaster} from 'react-hot-toast';


const CardCatalogo = ({filters, handleAddProduct}) => {

    <Toaster
    position="bottom-center"
    reverseOrder={false}/>
    const itemsFiltered = (Items) => {
        if(filters?.length) {
            return Items?.filter(item => filters?.includes(item.type))
        } else {
            return Items
        }
    }
    return (
    <>
        <div className='card__section'>
            {itemsFiltered(CardAllItems).map(item => {
        
                return(
                <div className={`product__card ${item.type}`} key={item.id}>
                    <div className="product__tumb">
                        <img src={require('../../assets/' + item.image + '.png')} alt={item.title} />
                    </div>
                    <div className="product__details">
                        <span className="product__category">{item.type}</span>
                        <h3>{item.title}</h3>
                        <div className="product__bottom__details">
                            <div className="product__price">{'$ ' + item.price + '.00'}</div>
                            <div className="product__links">
                                <Link to={'/' + item.id}><InfoIcon /></Link>
                                <span onClick={() => handleAddProduct(item)}><ShoppingCartIcon/></span>
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

export default CardCatalogo