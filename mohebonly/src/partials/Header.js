import React from 'react'
import img from '../index and footer/images/Logosm.png';
import '../styles/Header.css';

function header() {
    return (
        <div>
        <div class="headerTop">
             
        <img src={img} alt="" class="logo" />
        <nav>
            <ul class="navlinks">
                <li><a href="#" class="btn">Find an Event</a></li>
                <li><a href="#" class="btn">Private Dining</a></li>
            </ul>
        </nav>
        
        <a href="#" class="cta">
            <a href="#" class="btn about">Sign up | Log in</a>
            <button class="btn">About Us</button>
        </a>
        </div>
        </div>
    )
}

export default header
