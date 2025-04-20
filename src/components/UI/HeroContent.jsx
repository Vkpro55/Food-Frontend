import React from 'react'
import cherry from '../../assets/cherry.png'
import hero1 from '../../assets/hero1.png'
import hero2 from '../../assets/hero2.png'

const HeroContent = () => {
    return (
        <div className="hero-section">
            <div className='hero-content'>
                <h1>Premium <span>quality</span> Food for your <span>healthy</span> <img src={cherry} alt="cherry" /> & Daily Life
                </h1>
                <p>Discover delicious meals from your favorite local restaurants and get them delivered hot and fresh right to your door. Whether you're in the mood for spicy street food or comforting classics, we’ve got something for every taste. Browse, order, and enjoy — it’s that simple.</p>
            </div>
            <div className='hero-image'>
                <img className='img-1' src={hero1} alt="hero1" />
                <img className='img-2' src={hero2} alt="hero2" />
            </div>
        </div>
    )
}

export default HeroContent
