import React, { useState } from "react";
import Header from "./Header";
import '../../styles/CustomerDashBoardStyles/style.css'
import Search from "./HandleSearch";
import VehicleDetails from "./VehiclesDetails";
function ReservedVehicles() {
  // Sample customer data
  const customerName = "John Doe";
  const customerEmail = "johndoe@example.com";



  // State for searched cars
  const [searchedCars, setSearchedCars] = useState([]);

 

  const handleLogout = () => {
    alert("Logged out");
  };
  const vehicle = {
    name: "Car Model",
    description: "Description of the car goes here.",
    cost: 25000,
    location: "Abuja",
  };
  return (
    <div className="dashboard-container">
      <Header
        customerName={customerName}
        customerEmail={customerEmail}
        onLogout={handleLogout}
      />
      <Search  />
    
        <VehicleDetails vehicle={vehicle} />
     
    </div>
  );
}

export default ReservedVehicles;
