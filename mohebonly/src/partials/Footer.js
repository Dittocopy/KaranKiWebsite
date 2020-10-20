import React from 'react'
import '../styles/Footer.css'

// import { faGoogle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import footerlogo from '../index and footer/images/Logosm.png'


export default function Footer() {
    return (
        <div class="footer">
             <FontAwesomeIcon icon={['fab', 'microsoft']} />
            <div class="innerfooter">
            <div class="footeritem">
                <img src={ footerlogo } alt=""  class="footerLogo" />
                <div class="footersocialmedia">
                    <a href=""><i class="fa fa-facebook" aria-hidden="true"></i></a>
                    <a href=""><i class="fa fa-twitter" aria-hidden="true"></i></a>
                    <a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a>
                    <a href=""><i class="fa fa-google-plus" aria-hidden="true"></i></a>
                </div>
            </div>
            <div class="footeritem">
                <ul class="footerul">
                    <a href=""><li class="li">Home</li></a>
                    <a href=""><li class="li">About Us</li></a>
                    <a href=""><li class="li">Services</li></a>
                    <a href=""><li class="li">Portfolio</li></a>
                    <a href=""><li class="li">Contact Us</li></a>
                </ul>
            </div>
            <div class="footeritem">
                <ul class="footerul">
                    <a href=""><li class="li">HTML/Css</li></a>
                    <a href=""><li class="li">JavaScript</li></a>
                    <a href=""><li class="li">PHP</li></a>
                    <a href=""><li class="li">C</li></a>
                    <a href=""><li class="li">Java</li></a>
                </ul>
            </div>
            <div class="footeritem">
                <ul class="contact">
                    <li class="li"><i class="fa fa-map-marker" aria-hidden="true"></i>1, XYZ Street, New Delhi</li>
                    <li class="li"><i class="fa fa-phone" aria-hidden="true"></i>+91-9833512020</li>
                    <li class="li"><i class="fa fa-envelope-o" aria-hidden="true"></i>mohebdabilkar@gmail.com</li>
                </ul>
                
            </div>
        </div>
        <div class="footerbottom">
            Copyright &copy; Moheb Dabilkar Web Dev. All rights reserved
        </div>

    
        </div>
    )
}
