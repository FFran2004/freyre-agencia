import React from "react";
import "../info.css"
export default class Info extends React.Component {




    render() {
        return(
            <>
            <div className="row">
            <div className="col-sm-12 text-center">
                <p className="info">
                Somos instructores que están comprometidos a brindarte una educación de calidad y una experiencia de aprendizaje positiva. Además, somos una escuela inclusiva y diversa que valora la igualdad de oportunidades. Contáctanos hoy para obtener más información sobre nuestros cursos y cómo podemos ayudarte a alcanzar tus metas artísticas.
                </p>
                <p id="sublogo-align"><img src="/img/logo.jpg" alt="logo" id="sublogo"/> </p>
            </div>
            </div>
            </>
        )
    }
}