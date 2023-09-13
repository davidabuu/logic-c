import React, { useState } from "react";
import "../styles/RegisterStyles/register.css";
import { Link } from "react-router-dom";
function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a server
    console.log(formData);
  };

  return (
    <div className="register-main-container">
      <div className="registration-container">
        <h1 className="registration-heading">Register</h1>
        <p className="registration-description">
          We are happy to have you. Enter your details to create your account.
        </p>
        <form
          className="registration-form"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
        <p className="login-link">
          <Link to="/login">
            {" "}
            Already have an account? <a>Login</a>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
