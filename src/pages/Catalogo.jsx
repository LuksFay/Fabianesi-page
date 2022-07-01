import React, { useState } from 'react';
import CardCatalogo from '../components/cards/CardCatalogo';
import CheckBox from '../components/CheckBox';
import SliderCards from '../components/cards/SliderCards';
import '../styles/Catalogo.css';

const Catalogo = () => {
  const [filters, setFilters] = useState([])

  return (
    <>
      <SliderCards />
      <div className="container__catalogo">
        <div className='filter__catalogo'>
          <CheckBox filters={filters} setFilters={setFilters} />
        </div>
        <CardCatalogo filters={filters} />
      </div>
    </>
  )
}

export default Catalogo