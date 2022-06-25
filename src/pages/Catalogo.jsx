import React, { useState } from 'react';
import CardCatalogo from '../components/CardCatalogo';
import CheckBox from '../components/CheckBox';
import SliderCards from '../components/SliderCards';
import '../styles/Catalogo.css';

const Catalogo = () => {
  const [filters, setFilters] = useState([])

  return (
    <>
      <h2 className='title-catalogo'>Catálogo</h2>
      <SliderCards />
      <div className="divider"></div>
      <div className="container-catalogo">
        <div className='filter-catalogo'>
          <CheckBox filters={filters} setFilters={setFilters} />
        </div>
        <CardCatalogo filters={filters} />
      </div>
    </>
  )
}

export default Catalogo