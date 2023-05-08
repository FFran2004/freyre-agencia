import './App.css';

//navbar
import navbar from './paginas/navbar';




//rutas 
import Cursospag from './paginas/cursospag';
import Info from './paginas/info';
import { Routes, Route, BrowserRouter as Router, BrowserRouter } from "react-router-dom";
import Inicio from './inicio';
import MiNav from './paginas/navbar';




function App() {

  return (
    <>
    <div className="container">

    <MiNav />

<BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio  />}     />
          <Route path="/cursos" element={<Cursospag />}    />
          <Route path="/info" element={<Info />}            />
        </Routes>
      </BrowserRouter>



      


      

    </div>
    </>
  );
}

export default App;
