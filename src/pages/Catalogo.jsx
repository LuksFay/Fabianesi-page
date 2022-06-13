import React from 'react';
import Card from '../components/Card';
import FilterList from '../components/FilterList';
import { CardAllItems } from '../components/items/CardAllItems';
import SliderCards from '../components/SliderCards';
import '../styles/Catalogo.css';

const Catalogo = () => {
  return (
    <>
      <h2 className='title-catalogo'>Catálogo</h2>
      <SliderCards />
      <div className="divider"></div>
      <div className="container-prod">
          <div className='prib'>
          <FilterList />
          </div>
          <Card items={CardAllItems} />

      </div>
    </>
  )
}

export default Catalogo