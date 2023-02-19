import React from "react";
import './section3.css';


const Section3 = () => {
    return(
        <div>
        <div className="sec3">
            <h1 className="titulo3">Idiomas</h1>
            <hr className="linea3"/>
        </div>
        <div className="languages">
            <div className="IdiomasVarios">
                <h1>Español</h1>
                <h2>Lengua Materna</h2>
                <h1>Ingles</h1>
                <h2>Nivel: B2</h2>
            </div>
            <div className="IdiomasVarios">
                <h1>Portugues</h1>
                <h2>Nivel: A1</h2>
                <h1>Italiano</h1>
                <h2>Nivel: B1</h2>
            </div>
        </div>
        <h1 className="pagina">1/2</h1>
        </div>
    )
}
export {Section3}