// Reservations.js
import React from "react";
import "./Reservations.css";
const fakeCars = [
  {
    id: 1,
    name: "Car 1",
    category: "Sedan",
    unit: 3,
    weeks: 2,
    image: "car1.jpg",
  },
  {
    id: 2,
    name: "Car 1",
    category: "Sedan",
    unit: 3,
    weeks: 2,
    image: "car1.jpg",
  },
  {
    id: 3,
    name: "Car 1",
    category: "Sedan",
    unit: 3,
    weeks: 2,
    image: "car1.jpg",
  },
  // Add more fake car data here
];

const Reservations = ({ customerName = 'Abu David', customerEmail='davi@gmail.com' }) => {
  return (
    <div className="reservation-dashboard">
      <div className="header">
        <h1>Customer Dashboard</h1>
        <div className="reservation-info">
          <p>{customerName}</p>
          <p>{customerEmail}</p>
        </div>
      </div>
      <div className="reservations">
        <h2>Reservations</h2>
        <div className="reservation-list">
          {fakeCars.map((car) => (
            <div
              className="reservation"
              key={car.id}
            >
              <img
                src="/main-car.png"
                alt={car.name}
              />
              <div className="car-details">
                <h3>{car.name}</h3>
                <p>Category: {car.category}</p>
                <p>Units: {car.unit}</p>
                <p>Weeks: {car.weeks}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reservations;
