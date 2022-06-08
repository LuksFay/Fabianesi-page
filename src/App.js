import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Inicio from './pages/Inicio';
import Catalogo from './pages/Catalogo';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' exact element={<Inicio />}/>
            <Route path='/catalogo' element={<Catalogo />}/>
            {/* <Route path='/empresa' element={<Empresa />}/>
            <Route path='/envios' element={<Envios />}/>
            <Route path='/condicionesDeVenta' element={<Condiciones />}/>
            <Route path='/contacto' element={<Contacto />}/> */}
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
