import React from 'react';
import '../navbar.css';
export default class MiNav extends React.Component {

    handleMenuIconClick = () => {
        const toggle = document.querySelector('.toggle');
        const links = document.querySelector('.links');
        const logo = document.querySelector('.logo')

        
            toggle.classList.toggle('rotate');
            toggle.classList.toggle('up');
            links.classList.toggle('active');
            links.classList.toggle('center');
            logo.classList.toggle('hide-logo');
    }

    

    render() {
        return(
            <>
            <header className="header">
            <a href="/" className="logo">FREYRE</a>
         <nav className="navbar">
            <div className="links">
                <a href="/" className="link">Inicio</a>
                <a href="/cursos" className="link">Cursos</a>
                <a href="/info" className="link">Acerca de</a>
                </div>

                <div className="toggle" onClick={this.handleMenuIconClick}>|||</div>
        </nav>
        </header>


            </>
        )
    }
}