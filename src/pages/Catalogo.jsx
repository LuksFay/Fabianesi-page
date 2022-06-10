import React from 'react';
import Card from '../components/Card';
import { CardAllItems } from '../components/CardAllItems';
import FilterSidebar from '../components/FilterSidebar';
import SliderCards from '../components/SliderCards';
import '../styles/Catalogo.css';

const Catalogo = () => {
  return (
    <>
      <h2 className='title-catalogo'>Catálogo</h2>
      <SliderCards />
      <div className='card-section-catalogo'>
        <FilterSidebar />
        <Card items={CardAllItems} />
      </div>
    </>
  )
}

export default Catalogo