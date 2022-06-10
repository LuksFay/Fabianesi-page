import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/FilterSidebar.css';
import { CategoryItems } from './CategoryItems';

const FilterSidebar = () => {
  return (
    <>
        <div className="sidebar-container">
            <ul>
            {CategoryItems.map(item => {
                return(
                    <li key={item.id}>
                        <input type='checkbox' />
                        <Link to='/'>{item.name}</Link>
                    </li>
                )
            })} 
            </ul>   
        </div>
    </>
  )
}

export default FilterSidebar