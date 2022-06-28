import React from 'react';
import '../styles/Inicio.css';
import Card from '../components/cards/Card';
import {Link} from 'react-router-dom';
import { CardItemsHero } from '../components/items/CardItemsHero';
import CardHero from '../components/cards/CardHero';
import Button from '@mui/material/Button';
import MapView from '../components/leafletMapComponents/MapView';
// import ThemeConfig from '../components/materialConfig/ThemeConfig';

const Inicio = () => {
  return (
    <>
    <section className='inicio__section'>
        <CardHero />
    </section>

    <h2 className="title__section__card">Nuevos Productos</h2>

    <Card items={CardItemsHero}/>

    <div className="btn__link__container">
        <Button color="primary" variant="contained" size="large">
            <Link to={'/catalogo'}>
                Ver Catálogo
            </Link>
        </Button>
    </div>

    <h2 className="title__section__card">Productos Destacados</h2>

    <Card items={CardItemsHero}/>

    <div className="btn__link__container">
        <Button variant="contained" size="large">
            <Link to={'/catalogo'}>
                Ver Catálogo
            </Link>
        </Button>
    </div>

    <section className='empresa__container'>
        <div className='info__empresa'>
            <div className="text__empresa">
                <h3 className='title__empresa'>Fabianesi Tools</h3>
                <p className='descr__empresa'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non amet harum tenetur. Blanditiis, placeat vero. Cumque aliquam eveniet dicta vel vitae doloribus debitis laborum magni qui, aut dolore et adipisci.</p>
            </div>
        </div>
        <div className="map__empresa">
            <MapView />
        </div>
    </section>
    </>
  )
}

export default Inicio