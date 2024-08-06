import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LayoutConEncabezado from './componentes/publico/layout';
import Welcome from './componentes/publico/bienvenida';
import Revistas from './componentes/revistas/revistas';
import RevistaCompleta from './componentes/revistas/revistacompleta';
import Colecciones from './componentes/colecciones/colecciones';
import Component from './componentes/publico/AcercaDe';
import Noticias from './componentes/compartidos/noticias'
import Tecnologias from './componentes/compartidos/tecnologias';
import Ciencia from './componentes/compartidos/ciencia';
import Ingenieria from './componentes/compartidos/ingenieria';
import Computacion from './componentes/compartidos/computacion';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutConEncabezado><Welcome /></LayoutConEncabezado>} />
        <Route path="/revistas" element={<LayoutConEncabezado><Revistas /></LayoutConEncabezado>} />
        <Route path="/categoria/noticias" element={<LayoutConEncabezado><Noticias /></LayoutConEncabezado>} />
        <Route path="/categoria/tecnologia" element={<LayoutConEncabezado><Tecnologias /></LayoutConEncabezado>} />
        <Route path="/categoria/ciencia" element={<LayoutConEncabezado><Ciencia /></LayoutConEncabezado>} />
        <Route path="/categoria/ingenieria" element={<LayoutConEncabezado><Ingenieria /></LayoutConEncabezado>} />
        <Route path="/categoria/computacion" element={<LayoutConEncabezado><Computacion /></LayoutConEncabezado>} />
        <Route path="/revistacompleta" element={<LayoutConEncabezado><RevistaCompleta /></LayoutConEncabezado>} />
        <Route path="/colecciones" element={<LayoutConEncabezado><Colecciones /></LayoutConEncabezado>} />
        <Route path="/about" element={<LayoutConEncabezado><Component/></LayoutConEncabezado>} />
      </Routes>
    </Router>
  );
}

export default App;
