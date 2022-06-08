import React from 'react';
import Card from '../components/Card';
import { CardAllItems } from '../components/CardAllItems';

const Catalogo = () => {
  return (
    <div>Catalogo
      <Card items={CardAllItems} />
    </div>
  )
}

export default Catalogo