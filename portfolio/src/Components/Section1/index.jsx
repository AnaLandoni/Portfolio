import React from "react";
import './section1.css';
import { NavLink } from "react-router-dom";


const Section1 = () => {
    return(
        <div className="url">
            <h1 className="direcprincipal">@ani_landoni</h1>
            <div>
                <div className="direcciones">
                    <i className="bi bi-linkedin iconodirec"></i>
                    <h2 className="direc">www.linkedin.com/in/analauralandoni</h2>
                </div>
                <div className="direcciones">
                    <i className="bi bi-github iconodirec"></i>
                    <h2 className="direc">www.github.com/AnaLandoni</h2>
                </div>
                <div className="direcciones">
                    <i className="bi bi-instagram iconodirec"></i>
                    <h2 className="direc">www.instagram.com/ani_landoni</h2>
                </div>
            </div> 
           
        </div>
    )
}


export { Section1 }