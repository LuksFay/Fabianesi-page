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

function App() {
  return (
    <>
    <ThemeProvider theme={ThemeConfig}>
      <BrowserRouter>
      <ScrollToTop />
        <Paper>
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
        </Paper>
      </BrowserRouter>
    </ThemeProvider>
    </>
  );
}

export default App;
