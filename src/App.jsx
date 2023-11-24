import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import ReactGA from 'react-ga4';
import Layout from './pages/layout/Layout';
import Acerca from './pages/acerca/Acerca';
import Pagar from './pages/pagar/Pagar';
import Contactanos from './pages/contactanos/Contactanos';
import Desbloqueos from './pages/desbloqueos/Desbloqueos';
import Inicio from './pages/inicio/Inicio';
import Telefonos from './pages/telefonos/Telefonos';
import DetailsPhone from './pages/telefonos/detailsPhone/DetailsPhone';
import IniciarSesion from './pages/iniciarSesion/IniciarSesion';
import Register from './pages/registrarse/Register';
import Members from './pages/members/Members';

ReactGA.initialize('G-MDB0ZGBNFX');

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/acerca" element={<Acerca> </Acerca>}> </Route>
          <Route path="/pagar" element={<Pagar> </Pagar>}> </Route>
          <Route path="/contactanos" element={<Contactanos> </Contactanos>}> </Route>
          <Route path="/desbloqueos" element={<Desbloqueos> </Desbloqueos>}> </Route>
          <Route path="/" element={<Inicio> </Inicio>}> </Route>
          <Route path="/telefonos" element={<Telefonos> </Telefonos>}> </Route>
          <Route path="/telefonos/:id" element={<DetailsPhone />} />
          <Route path="/login" element={<IniciarSesion />} />
          <Route path="/register" element={<Register />} />
          <Route path="/members" element={<Members />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
