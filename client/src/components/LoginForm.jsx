// src/components/LoginForm.jsx
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const axiosConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      console.log("Logging in with:", formData);
      const response = await axios.post(
        "http://localhost:3001/user/login",
        formData,
        axiosConfig
      );

      // Assuming the server sends a token upon successful login
      const { token } = response.data;

      // Store the token in your application state or localStorage for further use
      console.log("Login successful! Token:", token);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>

      <Link to="http://localhost:3001/api/auth/google/callback">
        <button>Login with Google</button>
      </Link>
    </div>
  );
};

export default LoginForm;
