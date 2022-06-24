import React from 'react';
import CardCatalogo from '../components/CardCatalogo';
import CheckBox from '../components/CheckBox';
// import FilterList from '../components/FilterList';
import SliderCards from '../components/SliderCards';
import '../styles/Catalogo.css';

const Catalogo = () => {
  return (
    <>
      <h2 className='title-catalogo'>Catálogo</h2>
      <SliderCards />
      <div className="divider"></div>
      <div className="container-catalogo">
        <div className='filter-catalogo'>
          <CheckBox />
        </div>
        <CardCatalogo />
      </div>
    </>
  )
}

export default Catalogo