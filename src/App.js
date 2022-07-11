import { useState } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Header from './components/commons/Header';
import Inicio from './pages/Inicio';
import Catalogo from './pages/Catalogo';
import ThemeConfig from './components/materialConfig/ThemeConfig';
import { Paper } from '@mui/material';
import Footer from './components/commons/Footer';
import ScrollToTop from './components/ScrollToTop';
import InfoCardDetail from './pages/InfoCardDetail';
import ShoppingCart from './pages/ShoppingCart';

function App() {

  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist){
      setCartItems(
        cartItems.map((item)=>
        item.id === product.id
        ? {...ProductExist, quantity: ProductExist.quantity + 1}
        : item
        )
      );
    } else {
      setCartItems([...cartItems, {...product, quantity: 1}]);
    }
  };

  const handleRemoveProduct = (product) =>{
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist.quantity === 1){
      setCartItems(cartItems.filter((item) => item.id !== product.id))
    } else{
      setCartItems(
        cartItems.map((item) => item.id === product.id ? {...ProductExist, quantity: ProductExist.quantity - 1} : item)
      )
    }
  }

  return (
    <>
    <ThemeProvider theme={ThemeConfig}>
      <BrowserRouter>
      <ScrollToTop />
        <Paper>
          <Header />
            <Routes>
              <Route path='/' exact element={<Inicio />}/>
              <Route path='/catalogo' element={<Catalogo handleAddProduct={handleAddProduct} />}/>
              {/* <Route path='/empresa' element={<Empresa />}/>
              <Route path='/envios' element={<Envios />}/>
              <Route path='/condicionesDeVenta' element={<Condiciones />}/>
              <Route path='/contacto' element={<Contacto />}/> */}
              {/* DETAIL PRODUCTS CARD PAGE */}
              <Route path='/:card_id'  element={<InfoCardDetail />}/>
              <Route path='/carrito'  element={
                <ShoppingCart 
                cartItems={cartItems}
                handleAddProduct={handleAddProduct} 
                handleRemoveProduct={handleRemoveProduct}/>
                } />
            </Routes>
          <Footer />
        </Paper>
      </BrowserRouter>
    </ThemeProvider>
    </>
  );
}

export default App;
