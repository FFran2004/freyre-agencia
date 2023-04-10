import React from "react";
import "../contacto.css"
export default class Contacto extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            mensaje: ''
        }

        this.submitted = this.submitted.bind(this);
        this.changed = this.changed.bind(this);
    }


    submitted(event) {
        alert("Se envió el formulario de " + this.state.nombre);
        event.preventDefault();
    }

    changed(event) {
        this.setState({
            nombre: event.target.value
        })
    }


    render() {
        return(
            <>
            
            <div className="row">
                <div className="col-md-6 mt-5">
                    <h2>Contactanos</h2>
                    <h5><i className="bi bi-whatsapp">    +54 9 3572 40-7587</i></h5>
                    <h5><i className="bi bi-geo-alt">     Tucuman 929, Ed. Segundo Piso, Rio Segundo Córdoba</i></h5>
                </div>
                </div>

            <div className="row">
                <div className="col mt-5">
                <h2>Formulario de contacto</h2>
            <form onSubmit={this.submitted} className="mt-3">
                <div className="form-group col-md-6">
                    <label>Nombre</label>
                    <input type="text" className="form-control" onChange={this.changed} />
                </div>
                <div className="form-group col-md-6">
                    <label>Mensaje</label>
                    <textarea className="form-control"></textarea>
                </div>
                <button type="submit" className="btn btn-danger mt-2">Enviar</button>
            </form>
            </div>
            </div>

            





            </>
        )
    }
}