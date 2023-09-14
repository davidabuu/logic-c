import React from 'react';

const VehicleDetails = ({ vehicle }) => {
  return (
    <div className="vehicle-details">
      <img src='/main-car.png' alt={vehicle.name} />
      <h2>{vehicle.name}</h2>
      <p>{vehicle.description}</p>
      <div className="cost">
        <span>Current Cost:</span>
        <p>{vehicle.cost} USD</p>
      </div>
      <div className="location">
        <span>Location:</span>
        <p>{vehicle.location}</p>
      </div>
    </div>
  );
};

export default VehicleDetails;
