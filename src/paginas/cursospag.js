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
          <Cursos title="Danza" img="/img/danza.jpg" alt="danza" descripcion="Durante el curso de Hanza Heels, los estudiantes aprenderán técnicas de baile específicas, como pasos de baile, giros, saltos y movimientos en el suelo, todo ello utilizando tacones altos. Los estudiantes también trabajarán en la construcción de la fuerza y la resistencia necesarias para bailar con tacones. Además, los estudiantes también podrán aprender coreografías completas y cómo utilizar la musicalidad en sus movimientos. Este curso es ideal para aquellos que deseen desarrollar su confianza, mejorar su postura y aumentar su coordinación y flexibilidad." />
          <Cursos title="Maquillaje Social" img="/img/makeup.jpg" alt="makeup" descripcion="El curso de maquillaje social es una oportunidad para aprender técnicas y habilidades para crear looks de maquillaje profesional para diferentes ocasiones. Durante el curso, se enseña la aplicación de bases, correctores, sombras, delineadores, labiales y otros productos de maquillaje. También se exploran diferentes técnicas de maquillaje para adaptarse a las necesidades y preferencias de cada cliente, desde maquillaje suave y natural hasta maquillaje de noche más dramático. Además, se enseña cómo elegir y combinar colores para crear armonía y balance en el maquillaje." />
          <Cursos title="Modelaje" img="/img/modelaje.jpg" alt="modelaje"  descripcion="El curso de modelaje es una formación diseñada para enseñar las habilidades necesarias para trabajar como modelo en la industria de la moda y la publicidad. A través de este curso, los estudiantes aprenden técnicas de caminar, posar, y expresión corporal, así como también cómo cuidar su imagen y trabajar con diseñadores, fotógrafos y agentes de talento. El objetivo final del curso es preparar a los estudiantes para tener éxito en la industria del modelaje y desarrollar una carrera exitosa como modelo profesional." />
          <Cursos title="Zumba" img="/img/zumba.jpg" alt="zumba" descripcion="El curso de Zumba es un programa de entrenamiento físico que combina baile y ejercicio cardiovascular de alta intensidad para mejorar la salud y el bienestar de los participantes, mientras se divierten bailando diferentes estilos de música." />
          <Cursos title="Marketing" img="/img/marketing.jpg" alt="marketing" descripcion="El curso de marketing es una formación diseñada para enseñar a los estudiantes los fundamentos del marketing y las estrategias utilizadas para promocionar y vender productos o servicios. Durante el curso, los estudiantes aprenden cómo investigar y analizar el mercado, identificar a su público objetivo, desarrollar planes de marketing efectivos y utilizar herramientas de publicidad y promoción. El objetivo final del curso de marketing es preparar a los estudiantes para desarrollar e implementar campañas de marketing exitosas y ayudar a las empresas a aumentar sus ventas y crecer en el mercado." />
          <Cursos title="Danza Coreográfica" img="/img/baile.jpg" alt="baile" descripcion="El curso de danza coreográfica es una formación enfocada en enseñar las técnicas y habilidades necesarias para crear y ejecutar una coreografía. Los estudiantes aprenden cómo seleccionar la música adecuada, diseñar movimientos y transiciones, y trabajar en equipo para llevar la coreografía a la vida. El objetivo final del curso es permitir que los estudiantes exploren su creatividad y talento, y presenten una presentación espectacular y coherente." />
          <Cursos title="Corte y Confección" img="/img/confeccion.jpg" alt="corteyconfeccion" descripcion="En una clase de corte y confección aprenderás a elegir telas , modelos , tomar medidas , trazar patrones , hilvanar y entregar .Confeccionar prendas de tu propia autoría pudiendo así tener una capacitación básica en diseño de modas y colección de prendas." />          
          </>
            
        )
    }
}