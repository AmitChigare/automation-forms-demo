// src/components/RegisterForm.jsx
import React, { useState } from "react";
import axios from "axios";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const axiosConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      console.log("Sending data:", formData);
      await axios.post(
        "http://localhost:3001/user/register",
        formData,
        axiosConfig
      );
      console.log("Registration successful!");

      // Provide feedback to the user (e.g., clear the form or show a success message)
      setFormData({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
