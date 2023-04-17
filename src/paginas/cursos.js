import React from "react";
export default class Cursos extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <>
               <div className="row">
            <div className="col-12">
              <img src={this.props.img} alt={this.props.nombre} id="cursos" />
              <p className="descripcion">{this.props.descripcion}</p>
            </div>
          </div>
            
            </>
        )
    }

}