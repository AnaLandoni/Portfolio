import React from "react";
import { useState } from 'react';
import './formulario.css';

const Formulario = () => {
    const [Send, setSend] = useState(0);
    const sumarsend = () => {
        return setSend(Send+1);
    };
    return(
        <div>
            <form action="https://formspree.io/f/xbjegzjn" method="post">
                <div className="msj">
                    <textarea name="mensaje" id="mensaje" className="mensaje" placeholder="Tu mensaje"></textarea>
                    <button type="submit" className="enviar" onClick={sumarsend}>Enviar</button>
                </div>
            </form>
           
        
        </div>
    )
}
export {Formulario}