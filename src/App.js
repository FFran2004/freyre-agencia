import './App.css';

//navbar
import { Navbar, Nav } from 'react-bootstrap';
import "./navbar.css"




//rutas 
import Cursospag from './paginas/cursospag';
import Contacto from './paginas/contacto';
import Info from './paginas/info';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Inicio from './inicio';
import Perros from './paginas/perros';


function App() {
  return (
    <>
    <div className="container">

      
    <Navbar className="navbar fixed-top navbar-dark" expand="lg">
      <Navbar.Brand href="/" className="logo">FREYRE</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/" className="link">Inicio</Nav.Link>
          <Nav.Link href="/cursos" className="link">Cursos</Nav.Link>
          <Nav.Link href="/info" className="link">Acerca de</Nav.Link>
          <Nav.Link href="/contacto" className="link">Contacto</Nav.Link>
          <Nav.Link href="/extras" className="link">Extras</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>



      <Router>
        <Routes>
          <Route path="/" element={<Inicio  />}     />
          <Route path="/cursos" element={<Cursospag />}    />
          <Route path="/info" element={<Info />}            />
          <Route path="/contacto" element={<Contacto />}    />
          <Route path="/extras" element={<Perros />}    />
        </Routes>
      </Router>


      

    </div>
    </>
  );
}

export default App;
