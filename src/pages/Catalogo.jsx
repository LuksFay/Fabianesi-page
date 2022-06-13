import React from 'react';
import Card from '../components/Card';
import { CardAllItems } from '../components/items/CardAllItems';
import SliderCards from '../components/SliderCards';
import '../styles/Catalogo.css';

const Catalogo = () => {
  return (
    <>
      <h2 className='title-catalogo'>Catálogo</h2>
      <SliderCards />
      <div className="sep"></div>
      <Card items={CardAllItems} />
    </>
  )
}

export default Catalogo