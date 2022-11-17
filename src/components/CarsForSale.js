import React from 'react'
import './CarsForSale.css'
import MyCars from './MyCars'

const CarsForSale = () => {
  return (
    <div className='cars-container'>
      <div className='btn-container'>
        <button className='car-button'>BMW</button>
        <button className='car-button'>AUDI</button>
        <button className='car-button'>MERCEDES</button>
        <button className='car-button'>TOYOTA</button>
        <button className='car-button'>VOLKSWAGEN</button>
      </div>
      <div className='my-cars'>
        <MyCars />
        <MyCars />
        <MyCars />
        <MyCars />
        <MyCars />
        <MyCars />
      </div>
    </div>
  )
}

export default CarsForSale
