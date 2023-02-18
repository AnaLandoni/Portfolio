import React from "react";
import './Header.css';
import Foto from './assets/descargar.png'
import FotoPerfil from './assets/FotoPerfilchica.jpg'

const Header = () => {
    return(
        <div className="perfil">
        <div >
            <h1 className="nombre">Landoni</h1>
            <h1 className="apellido">Ana Laura Iné<span className="letra">s</span></h1>
        </div>
        
        <div className="textoperfil">
            
            <h2 className="ing">INGENIERA INDUSTRIAL, MBA,</h2>
            <h2 className="ing">FUTURA DESARROLLADORA WEB FULL STACK DEVELOPER</h2>
            <div className="correo">
                <i className="bi bi-envelope iconoperfil"></i>
                <h2 className="DirecContacto">analauralandoni@gmail</h2>
            </div>
            <div className="telefono">
                <i className="bi bi-telephone iconoperfil"></i>
                <h2 className="DirecContacto">342-4071591</h2>
            </div>
        </div>
        
        <img src={FotoPerfil} alt="fotoperfil" className="foto"/>
        
        </div>
    )
}
export {Header}