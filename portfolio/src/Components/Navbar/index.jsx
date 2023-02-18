import React from "react";
import './Navbar.css'
/* import Fotobtn from './assets/FotoperfilIconochica.jpg' */
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const linkedin = 'https://www.linkedin.com/in/analauralandoni/'
    return(
        <div className="Navbar">
            <div className="logo">
                <NavLink to='/'>
                    <button className="Fotoperfilchica"></button>
                </NavLink>
                <div className="NombreLink">
                    <h1>Curriculum</h1>
                    <h2>Ana Laura Inés Landoni</h2>
                </div>
            </div>
            <div className="iconosdelinks">
            
                <NavLink to='/formulario' className="icononav">
                    <button className="btnnav1"><i className="bi bi-envelope-fill iconolink"></i></button>
                </NavLink>
                <button className="btnnav1"><i className="bi bi-tools icononav iconolink"></i></button>
                <a href="https://www.linkedin.com/in/analauralandoni/" className="btnnav2 icononav"><i className="bi bi-plus-lg iconolink"></i></a>
                <a href="#manolike" className="icononav btnnav2"><i className="bi bi-hand-thumbs-up-fill iconolink"></i></a>
                
            </div>
        </div>
    )
}


export { Navbar }