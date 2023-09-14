import React from "react";

const Header = ({ customerName, customerEmail, onLogout }) => {
  return (
    <div className="header">
      <h1>Customer Dashboard</h1>
      <h1>{customerName}</h1>
      <p>{customerEmail}</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Header;
