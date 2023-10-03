import './App.css'
import { AboutUs } from './components/AboutUs/AboutUs';
import { CursoBasic } from './components/CursoBasic/CursoBasic';
import { CursoMid } from './components/CursoMid/CursoMid';
import { CursoPro } from './components/CursoPro/CursoPro';
import { Cursos } from './components/Cursos/Cursos';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { Navbar } from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Practicas } from './components/Practicas/Practicas';
import { Blog } from './components/Blog/Blog';
import { Wpp } from './components/Wpp/Wpp';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Wpp/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Nosotros" element={<AboutUs />} />
        <Route path="/Cursos" element={<Cursos />} />
        <Route path="/Cursos/Basico" element={<CursoBasic />} />
        <Route path="/Cursos/avanzado" element={<CursoMid />} />
        <Route path="/Cursos/profesional" element={<CursoPro />} />
        <Route path="/Practicas" element={<Practicas />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
