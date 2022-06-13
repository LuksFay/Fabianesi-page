import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Container, Hidden, Toolbar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Divider from '@mui/material/Divider';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import '../styles/Header.css';

const LinksItems = [
  {
    id:1,
    title: 'Inicio',
    path: './',
  },
  {
    id: 2,
    title: "Catálogo",
    path: "./catalogo",
  },
  {
    id: 3,
    title: "Empresa",
    path: "./empresa",
  },
  {
    id: 4,
    title: "Envios",
    path: "./envios",
  },
  {
    id: 5,
    title: "Condiciones",
    path: "./condicionesDeVenta",
  },
  {
    id: 6,
    title: "Contacto",
    path: "./contacto",
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar position='sticky' color='default'>
        <h1 className='logo'>Fabianesi Tools</h1>
          <Container maxWidth='md'>
            <Toolbar disableGutters>
              <Hidden smDown>
                {LinksItems.map(item => {
                  return(
                    <Link className='link-item' to={item.path} key={item.id}>
                      {item.title}
                    </Link>
                  )
                })}
              </Hidden>
              <Hidden smUp>
                <IconButton onClick={() => setOpen(true)}>
                  <MenuIcon />
                </IconButton>
              </Hidden>
            </Toolbar>
          </Container>
          <SwipeableDrawer 
            anchor='right' 
            open={open} 
            onOpen={() => setOpen(true)} 
            onClose={() => setOpen(false)}>
            <div>
            <IconButton onClick={() => setOpen(false)}>
              <ChevronRightIcon />
            </IconButton>
            </div>
            <Divider />
              {LinksItems.map(item => {
                return(
                  <Link className='link-item' to={item.path} key={item.id}>
                    {item.title}
                  </Link>
                )
              })}
          </SwipeableDrawer>
      </AppBar>
    </>
  )
}

export default Header