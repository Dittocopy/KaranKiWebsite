import React from 'react'
import './styles/Body.css'
import one from './index and footer/images/one.png'
import banner from './index and footer/images/banner.png';

function Body() {
    return (
        <div>
            <section class="banner">
            <img src={ banner } alt="marioclub welcome banner" />
                <div class="welcome">
                    FOOD. FREINDS & MORE...
                </div>
            </section>


            <section class="aboutus">
        
                <img src={one} alt="" />
                <section class="aboutus2">
                    <p class="id">
                        <h2>
                            What is The Food Alley all about
                        </h2>
                        <br />It is an experience, a journey and a road to create everlasting memories. The idea is simple, to create a real social experience for everyone where you can meet like minded people, laugh, share experiences, create memories and make friends (Some for life), and all of this over delicious food either at home or at a restaurant or at one of our unique pop ups around your city and beyond! We say we are 'Glo-cal' which translates to Global yet Local. Our aim is create this social experience across the globe, adopt and inherit the food culture of the regions we have presence in, and reflects those food cultures in our events.
                    </p>
                </section>
            </section>

        </div>
    )
}

export default Body
