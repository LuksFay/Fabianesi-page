import React from 'react';
import '../styles/FilterList.css'

const FilterList = () => {
  return (
    <>
        <div className="container-list">
            <ul className='ul-filter'>
                <li className='item-filter'><input type='checkbox' /><button className='btn-filter'>Bateas Ultrasonido</button></li>
                <li className='item-filter'><input type='checkbox' /><button className='btn-filter'>Diagnostico Directo</button></li>
                <li className='item-filter'><input type='checkbox' /><button className='btn-filter'>Electrónica / Portones automáticos</button></li>
                <li className='item-filter'><input type='checkbox' /><button className='btn-filter'>Escáneres</button></li>
                <li className='item-filter'><input type='checkbox' /><button className='btn-filter'>Escáneres Profesionales AUTEL</button></li>
                <li className='item-filter'><input type='checkbox' /><button className='btn-filter'>GNC</button></li>
            </ul>
        </div>
    </>
  )
}

export default FilterList