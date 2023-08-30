import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

import Header from './Componentes/Header';
import Nav from './Componentes/Nav';
import './App.css';
import Footer from './Componentes/Footer';
import Home from './Rutas/Home';
import MapaAstral from './Rutas/MapaAstral';
import Servicios from './Rutas/Servicios';
import Contacto from './Rutas/Contacto'

function App() {
  return (
    <div className='App'>
      <div className='body'>
        <Header>
          <Nav></Nav>
        </Header>

          <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contacto" element={<Contacto />} />
            <Route path="/Servicios" element={<Servicios />} />
            <Route path="/MapaAstral" element={<MapaAstral />} />
          </Routes>  
        </Router>
        <Footer />
      </div>
    </div>
  );
}


export default App;
