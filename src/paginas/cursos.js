import React from "react";
export default class Cursos extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <>
            <div className="card">
            <img src={this.props.img} alt={this.props.alt} />
            <div>
            <h3 className="card-title" id="title">{this.props.title}</h3>
            <p>{this.props.descripcion}</p>
            </div>
            </div>
            </>
        )
    }

}