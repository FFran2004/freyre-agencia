import './App.css';

//navbar
import navbar from './paginas/navbar';




//rutas 
import Cursospag from './paginas/cursospag';
import Info from './paginas/info';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Inicio from './inicio';
import MiNav from './paginas/navbar';




function App() {

  return (
    <>
    <div className="container">

    <MiNav />


      <Router>
        <Routes>
          <Route path="/" element={<Inicio  />}     />
          <Route path="/cursos" element={<Cursospag />}    />
          <Route path="/info" element={<Info />}            />
        </Routes>
      </Router>



      


      

    </div>
    </>
  );
}

export default App;
