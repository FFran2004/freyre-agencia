import React from 'react';
import '../navbar.css';

export default class MiNav extends React.Component {
  handleMenuIconClick = () => {
    document.body.classList.toggle("open");
  }

  render() {
    return (
      <>
        <nav className="navbar">
          <div className="navbar-overlay" onClick={this.handleMenuIconClick}></div>
          <button type="button" className="navbar-burger" onClick={this.handleMenuIconClick}>
            <span className="material-icons">menu</span>
          </button>
          <h1 className="navbar-title">Freyre</h1>
          <nav className="navbar-menu">
            <a href="/">Inicio</a>
            <a href="/cursos" className="active">Cursos</a>
            <a href="/info">Acerca de</a>

            <footer>
                <a href="https://www.instagram.com/freyre.agenciademodelaje/"> 
            <i className='bx bxl-instagram'></i>
            </a>
            <a href="https://maps.app.goo.gl/zkVAdw9HKnqdPkgB7">
            <i className='bx bx-map' id="map"></i>
            </a>
            <a href="https://wa.me/3572401326?text=Hola!%20quiero%20más%20información%20sobre:">
            <i className='bx bxl-whatsapp' id="whatsapp"></i>
            </a>
            </footer>
          </nav>
        </nav>
      </>
    );
  }
}
