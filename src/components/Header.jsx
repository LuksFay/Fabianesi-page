import React from 'react';
import Navbar from './Navbar';
import '../styles/Header.css';

const Header = () => {
  return (
    <header>
        <h2 className='logo'>Fabianesi Tools</h2>
        <Navbar />
    </header>
  )
}

export default Header