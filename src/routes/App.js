import '../assets/css/App.css'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import Layout from '../components/Layout';
import Home from '../containers/Home';
import About from '../containers/About';
import Sections from '../containers/Sections';
import Contact from '../containers/Contact';

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
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
