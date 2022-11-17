import React from "react";
import "./CarsForSale.css";

const CarsForSale = () => {
  return (
    <div className="cars-container">
      <div className="btn-container">
        <button className="bmw">BMW</button>
        <button className="audi">AUDI</button>
        <button className="mercedes">MERCEDES</button>
        <button className="toyota">TOYOTA</button>
        <button className="volkswagen">VOLKSWAGEN</button>
      </div>
    </div>
  );
};

export default CarsForSale;
