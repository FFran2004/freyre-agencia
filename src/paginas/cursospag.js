import React from "react";
import Cursos from './cursos';
import "../cursos.css";
export default class Cursospag extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return(
          <>
          <Cursos img="/img/cejas.jpg" alt ="cejas" descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod tellus at enim imperdiet, sit amet luctus justo commodo. Vivamus euismod ipsum vitae gravida tristique. Praesent sagittis consectetur turpis vel dapibus. Duis tempus quam vitae nulla hendrerit vestibulum." />
          <Cursos img="/img/danza.jpg" alt="danza" descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod tellus at enim imperdiet, sit amet luctus justo commodo. Vivamus euismod ipsum vitae gravida tristique. Praesent sagittis consectetur turpis vel dapibus. Duis tempus quam vitae nulla hendrerit vestibulum." />
          <Cursos img="/img/foto.jpg"  alt="foto" descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod tellus at enim imperdiet, sit amet luctus justo commodo. Vivamus euismod ipsum vitae gravida tristique. Praesent sagittis consectetur turpis vel dapibus. Duis tempus quam vitae nulla hendrerit vestibulum." />
          <Cursos img="/img/makeup.jpg" alt="makeup" descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod tellus at enim imperdiet, sit amet luctus justo commodo. Vivamus euismod ipsum vitae gravida tristique. Praesent sagittis consectetur turpis vel dapibus. Duis tempus quam vitae nulla hendrerit vestibulum." />
          <Cursos img="/img/modelaje.jpg" alt="modelaje"  descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod tellus at enim imperdiet, sit amet luctus justo commodo. Vivamus euismod ipsum vitae gravida tristique. Praesent sagittis consectetur turpis vel dapibus. Duis tempus quam vitae nulla hendrerit vestibulum." />
          <Cursos img="/img/zumba.jpg" alt="zumba" descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod tellus at enim imperdiet, sit amet luctus justo commodo. Vivamus euismod ipsum vitae gravida tristique. Praesent sagittis consectetur turpis vel dapibus. Duis tempus quam vitae nulla hendrerit vestibulum." />
       
          </>
            
        )
    }
}