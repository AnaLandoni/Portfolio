import React from "react";
import './skill.css';


const Skill = () => {
    return(
        <div className="Habilidades">
            <p>Me considero una persona proactiva, muy responsable, con gran capacidad de aprendizaje, buena adaptabilidad a nuevos entornos y optimas relaciones sociales.<br />Busco un trabajo donde pueda desarrollar todo mi potencial y me permita crecer profesionalmente afrontando, día a día, nuevos desafíos y responsabilidades.</p>
                
            <a href="https://www.linkedin.com/in/analauralandoni/" className="linkein"><h1 className="seguime">SEGUIME PARA MAS INFORMACIÓN</h1></a>
            <div className="estrellas">
                <div className="estrella"></div>
                <div className="estrella"></div>
                <div className="estrella"></div>
                <div className="estrella"></div>
                <div className="estrella"></div>
                <div className="estrella"></div>
            </div>

        </div>
    )
}
export {Skill}