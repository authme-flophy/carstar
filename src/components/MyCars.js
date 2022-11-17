import React from 'react'

const MyCars = () => {
  return (
    <div className='my-cars-container'>
      <div className='car-image-card'>
        <img
          src='https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1600'
          alt='mercedes benz'
        />
      </div>
      <div className='about-car'>
        <h3 id='car-name'>Nissan GTR 2016</h3>
        <p className='car-cost'>KSHS. 8,000,000</p>
        <p className='year'>
          Year: <span>2016</span>
        </p>
        <p className='engine'>
          Engine: <span>2.0L, Petrol</span>
        </p>
        <p className='mileage'>
          Mileage: <span>115643 km</span>
        </p>
        <div className='car-details-btn'>
          <button>Details</button>
        </div>
      </div>
    </div>
  )
}

export default MyCars
