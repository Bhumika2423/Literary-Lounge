import React from 'react'
import './Hero.css'
import eye_icon from '../Assets/eye_icon.png'
import hero_image from '../Assets/hero_1.png'


export const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-eye-icon">
            <p>new</p>
            <img src={eye_icon} alt='' />
          </div>
          <p>Collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          {/* <img src={arrow_icon} alt=''/> */}
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt='' />
      </div>
    </div>
  )
}

export default Hero;