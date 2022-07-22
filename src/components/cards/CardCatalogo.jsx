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

// link de wsp
//https://api.whatsapp.com/send?phone=+543412019025&text=Hola!%20Vengo%20de%20la%20p%C3%A1gina.%20Quisiera%20continuar%20con%20la%20compra%20de%20los%20siguientes%20productos:%20*producto*,%20*producto*

// info que tenia la etiqueta <a> antes de usar la funcion addToCart
//href={`https://api.whatsapp.com/send?phone=+543412019025&text=Hola!%20Vengo%20de%20la%20p%C3%A1gina.%20Quisiera%20continuar%20con%20la%20compra%20del%20siguiente%20producto:%20*${item.title}*`}target='_blank'
//