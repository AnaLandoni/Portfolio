import { useState } from 'react';
import React from "react";
import './Footer.css';

const Footer = () => {
    const [Likes, setLikes] = useState(0);
    return(
        <div id="manolike" className="footer">
            <button className="btnlike" onClick={() => {setLikes(Likes+1)}}><i class="bi bi-hand-thumbs-up-fill manolike"></i></button>
            <h2 className='cv'>Curriculum</h2>
            <div className='cuentas'>
                <h5><i className="bi bi-hand-thumbs-up-fill cvicono"></i>{Likes}</h5>
                <h5><i className="bi bi-eye-fill cvicono"></i>0</h5>
                <h5><i className="bi bi-chat-left-fill cvicono iconomsj"></i>0</h5>
            </div>        
        </div>
    )
}
export {Footer}