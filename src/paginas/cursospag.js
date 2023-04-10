import React from "react";
import "../cursos.css";
export default class Cursos extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return(
          <>
            <div className="container-fluid mt-5">
  <div className="row">
    <div className="col-lg-8 col-md-6 col-sm-12 my-4">
      <div className="row">
        <div>
          <img src="./img/cejas.jpg" alt="cejas" className="w-100 cursos" />
          <p className="descripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod tellus at enim imperdiet, sit amet luctus justo commodo. Vivamus euismod ipsum vitae gravida tristique. Praesent sagittis consectetur turpis vel dapibus. Duis tempus quam vitae nulla hendrerit vestibulum. </p>
          
          <img src="./img/danza.jpg" alt="danza"className="w-100 cursos" />
          <p className="descripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod tellus at enim imperdiet, sit amet luctus justo commodo. Vivamus euismod ipsum vitae gravida tristique. Praesent sagittis consectetur turpis vel dapibus. Duis tempus quam vitae nulla hendrerit vestibulum. </p>
          
          <img src="./img/foto.jpg" alt="foto" className="w-100 cursos" />
          <p className="descripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod tellus at enim imperdiet, sit amet luctus justo commodo. Vivamus euismod ipsum vitae gravida tristique. Praesent sagittis consectetur turpis vel dapibus. Duis tempus quam vitae nulla hendrerit vestibulum. </p>
          
          <img src="./img/makeup.jpg" alt="makeup" className="w-100 cursos" />
          <p className="descripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod tellus at enim imperdiet, sit amet luctus justo commodo. Vivamus euismod ipsum vitae gravida tristique. Praesent sagittis consectetur turpis vel dapibus. Duis tempus quam vitae nulla hendrerit vestibulum. </p>
          
          <img src="./img/modelaje.jpg" alt="modelaje" className="w-100 cursos" />
          <p className="descripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod tellus at enim imperdiet, sit amet luctus justo commodo. Vivamus euismod ipsum vitae gravida tristique. Praesent sagittis consectetur turpis vel dapibus. Duis tempus quam vitae nulla hendrerit vestibulum. </p>
          
          <img src="./img/zumba.jpg" alt="zumba" className="w-100 cursos" />
          <p className="descripcion">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod tellus at enim imperdiet, sit amet luctus justo commodo. Vivamus euismod ipsum vitae gravida tristique. Praesent sagittis consectetur turpis vel dapibus. Duis tempus quam vitae nulla hendrerit vestibulum. </p>


        </div>
      </div>
    </div>
  </div>
</div>
</>
            
        )
    }
}