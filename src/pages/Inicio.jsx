import React from 'react';
import '../styles/Inicio.css';
import {Link} from 'react-router-dom';
import Card from '../components/cards/Card';
import CardHero from '../components/cards/CardHero';
import { CardItemsHero } from '../components/items/CardItemsHero';
import { CardItemsBest } from '../components/items/CardItemsBest';
import Button from '@mui/material/Button';
import MapView from '../components/leafletMapComponents/MapView';
// import ThemeConfig from '../components/materialConfig/ThemeConfig';

const Inicio = () => {
  return (
    <>
    <section className='hero__section'>
        <CardHero />
    </section>

    <section className="new__product__section">
        <h2 className="title__section__card">Nuevos Productos</h2>
        <Card items={CardItemsHero}/>
        <div className="btn__link__container">
            <Button color="primary" variant="contained" size="large">
                <Link to={'/catalogo'}>
                    Ver Catálogo
                </Link>
            </Button>
        </div>
    </section>

    <section className="important__product__section">
        <h2 className="title__section__card">Productos Destacados</h2>
        <Card items={CardItemsBest}/>
        <div className="btn__link__container">
            <Button variant="contained" size="large">
                <Link to={'/catalogo'}>
                    Ver Catálogo
                </Link>
            </Button>
        </div>
    </section>


    <section className='empresa__section'>
        <div className='info__empresa'>
            <div className="text__empresa">
                <h3 className='title__empresa'>¿Dónde estamos?</h3>
                <p className='descr__empresa'>La empresa FabianesiTools se encuentra a pocas cuadras del río Paraná, uno de los ríos más importantes del país. FabianesiTools se dedica a la venta minorista de productos de diagnóstico para motores, como herramientas de diagnóstico, software de diagnóstico y equipos de prueba para motores. La empresa ofrece productos de alta calidad y tecnología avanzada para ayudar a los mecánicos a diagnosticar y reparar problemas de motor.</p>
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