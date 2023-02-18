import React from "react";
import './section2.css';


const Section2 = () => {
    return(
        <div>
            <div className="sec2">
                <h1 className="titulo2">Estudios</h1>
                <hr className="linea2"/>
            </div>
        <div className="contenedores">
            <div className="contenedor1">
                <div className="estudio">
                    <i className="bi bi-mortarboard degree"></i>
                    <div className="study">
                        <h1 className="degreetitulo">Ingeniera Industrial</h1>
                        <h2 className="universidad">FIQ, Universidad Nacional del Litoral | 2010/17</h2>
                    </div>
                </div>
                <div className="estudio">
                    <i className="bi bi-mortarboard degree"></i>
                    <div className="study">
                        <h1 className="degreetitulo">Maestría en Administración de Empresas</h1>
                        <h2 className="universidad">FCE, Universidad Nacional del Litoral | 2019/23</h2>
                    </div>
                </div>  
            </div>
            <div className="contenedor2">
                <div className="estudio">
                    <i className="bi bi-mortarboard degree"></i>
                    <div className="study">
                        <h1  className="degreetitulo">Diplomatura en Desarrollo WEB<br />Front-end Developer</h1>
                        <h2 className="universidad">Universidad Tecnologica Nacional | 2022/23</h2>
                    </div>
                </div>
                <div className="estudio">
                    <i className="bi bi-mortarboard degree"></i>
                    <div className="study">
                        <h1 className="degreetitulo">Diplomatura en Desarrollo WEB<br />Back-end Developer</h1>
                        <h2 className="universidad">Universidad Tecnologica Nacional | 2022/23</h2>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export {Section2}
