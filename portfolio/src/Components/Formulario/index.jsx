import React from "react";
import './formulario.css';

const Formulario = () => {
    return(
        <div>
            <form action="https://formspree.io/f/xbjegzjn" method="post">
                <div className="msj">
                    <input type="textarea" name="mensaje" className="mensaje" placeholder="Tu mensaje"/>
                    <button type="submit" className="enviar">Enviar</button>
                </div>
            </form>
        
        </div>
    )
}
export {Formulario}