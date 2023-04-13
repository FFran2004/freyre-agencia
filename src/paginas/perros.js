import React from "react";
import "../perros.css"

export default class Perros extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      perros: [],
      razaImagenes: {}
    };
  }

  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(res => res.json())
      .then(result => {
        const razas = Object.keys(result.message);
        this.setState({ perros: razas });
        // obtener imagen de cada raza
        razas.forEach(raza => {
          fetch(`https://dog.ceo/api/breed/${raza}/images/random`)
            .then(res => res.json())
            .then(result => {
              const razaImagenes = this.state.razaImagenes;
              razaImagenes[raza] = result.message;
              this.setState({ razaImagenes: razaImagenes });
            });
        });
      });
  }

  render() {
    return (
      <div>
        <h1>Lista de razas de perros:</h1>
        <ul>
          {this.state.perros.map((raza, index) => (
            <li key={index}>
              <img src={this.state.razaImagenes[raza]} alt={raza} id="razas"/>
              {raza}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
