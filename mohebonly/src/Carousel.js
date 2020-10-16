import React from 'react'
import './styles/Carousel.css'
import arrow from './index and footer/images/arrow.png';

function Carousel() {
    return (
        <div>
        <div class="carousel">
        <div class="carouselarrowleft" id="left">
            <img src={ arrow } alt="" />
        </div>
        <div class="carouselarrowright" id="right">
            <img src={ arrow } alt="" />
        </div>
        <div class="carouselreview">    
            <div class="carouselreviewheading">
                Our Stories
            </div>
            <div class="carouselmainreview">
                <h1>Lorem ipsum dolor sit. Lorem ipsum dolor sit amet.</h1>
            </div>
            <div class="carouselstars">
                🌟 🌟 🌟 🌟 🌟 
            </div>
            <div class="carouselreviewername">
                Moheb
            </div>
        </div>
        </div>
        </div>
    )
}

export default Carousel
