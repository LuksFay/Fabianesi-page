import React from 'react';
import {Link} from 'react-router-dom';
import { linksItems } from './LinksItems';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='ul-nav'>
        {linksItems.map(item => {
              return(
                <li key={item.id} className={item.linkClass}>
                  <Link to={item.path}>
                      {item.title}
                  </Link>
                </li>
              );
        })}
      </ul>
    </nav>
  )
}

export default Navbar