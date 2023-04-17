import React from "react";
import "./inicio.css";
export default class Inicio extends React.Component {

    render() {
        return(
            <>
          
            <p id="logo-align"><img src="/img/logo.jpg" alt="logo" id="logo" /></p>
                <div className="col-sm-12 text-center" id="bienvenida">
                    <p id="iniciodesc">
                    ¡Bienvenidos a nuestra agencia de artes! Ofrecemos cursos de maquillaje, danza, modelaje, fotografía y más para ayudarte a explorar tu creatividad y desarrollar tus habilidades artísticas.
                    </p>
                </div>
        
            </>



        )
    }
}