import React, { useState } from 'react';
import '../styles/LoginStyles/login.css'
import { Link } from 'react-router-dom';
function Login() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="login-main-container">
      <div className="login-container">
        <h1 className="login-heading">Login</h1>
       
        <form className="login-form" onSubmit={handleSubmit}>
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
          
          <button type="submit">Submit</button>
        </form>
        <p className="login-link">
            <Link to='/register'>  New User? <a>Register</a></Link>
        
        </p>
      </div>
    </div>
  );
}

export default Login;
