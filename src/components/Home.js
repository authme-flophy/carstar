import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import './Home.css'

function Home() {
  return (
    <div className='home-container'>
      <div className='heading-container'>
        <h1>
          <TypeAnimation
            sequence={[
              'DRIVING',
              1000,
              'DRIVING TOMORROW',
              1000,
              'DRIVING TOMORROW TODAY',
              1000,
            ]}
            cursor={false}
            wrapper='div'
            className='home-animation'
            easing='ease-in-out'
            repeat={2}
          />
          {/* DRIVING TOMORROW <br></br> TODAY */}
        </h1>
      </div>
      <div className='shopnow-btn'>
        <button className='button'>SHOP NOW</button>
      </div>
    </div>
  )
}

export default Home
