import React from "react";
import "../info.css"
export default class Info extends React.Component {




    render() {
        return(
            <>
            <div className="row">
            <div className="col-sm-12 text-center">
                <p className="info">
                Somos instructores que están comprometidos a brindarte una <span id="resaltado">educación de calidad</span> y una experiencia de aprendizaje positiva. Además, somos una escuela inclusiva y diversa que valora la igualdad de oportunidades. <span id="resaltado">Contáctanos</span> hoy para obtener más información sobre nuestros cursos y cómo podemos ayudarte a alcanzar tus <span id="resaltado">metas artísticas</span>.
                </p>
            </div>
            </div>
            </>
        )
    }
}