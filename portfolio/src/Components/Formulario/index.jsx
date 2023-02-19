import React from "react";
import './formulario.css';

const Formulario = () => {
    return(
        <div>
            <form action="https://formspree.io/f/xbjegzjn" method="post">
                <div className="msj">
                    <textarea name="mensaje" id="mensaje" className="mensaje" /* wrap="hard" */ placeholder="Tu mensaje"></textarea>
                    <button type="submit" className="enviar">Enviar</button>
                </div>
            </form>
        
        </div>
    )
}
export {Formulario}