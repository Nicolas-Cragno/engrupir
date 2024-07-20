import '../assets/css/App.css'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import Layout from '../components/Layout';
import Home from '../containers/Home';
import About from '../containers/About';
import Sections from '../containers/Sections';
import Contact from '../containers/Contact';
import AcidGrooveOne from '../containers/AcidGrooveOne';
import AcidGrooveTwo from '../containers/AcidGrooveTwo';
import VanguArtOne from '../containers/VanguArtOne';
import VanguartTwo from '../containers/VanguartTwo';
import Ofert from '../containers/Ofert';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exacth path='/' element={<Home/>}></Route>
            <Route exacth path='/nosotros' element={<About/>}></Route>
            <Route exacth path='/secciones' element={<Sections/>}></Route>
            <Route exacth path='/contacto' element={<Contact/>}></Route>
            {/* subpaginas de notas */}
            <Route exacth path='/acidgroove-carajo' element={<AcidGrooveOne/>}></Route>
            <Route exacth path='/acidgroove-acidhouse' element={<AcidGrooveTwo/>}></Route>
            <Route exacth path='/vanguart-ophelia' element={<VanguArtOne/>}></Route>
            <Route exacth path='/vanguart-toto' element={<VanguartTwo/>}></Route>
            <Route exacth path='/oferta' element={<Ofert/>}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
