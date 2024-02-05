// StudentForm.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const StudentForm = () => {
  const { id } = useParams();
  //   const history = useHistory();
  const [formData, setFormData] = useState({
    studentName: "",
    course: "",
    department: "",
    remarks: "",
  });

  useEffect(() => {
    // Fetch student data if editing
    const fetchStudentData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/getStudent/${id}`
        );
        setFormData(response.data);
      } catch (error) {
        console.error("Error fetching student data:", error);
      }
    };

    if (id) {
      fetchStudentData();
    }
  }, [id]);

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
      if (id) {
        // Update existing student
        await axios.put(
          `http://localhost:3001/api/updateStudent/${id}`,
          formData,
          axiosConfig
        );
        console.log("Student updated successfully!");
      } else {
        // Add new student
        await axios.post(
          "http://localhost:3001/api/addStudent",
          formData,
          axiosConfig
        );
        console.log("Student added successfully!");
      }

      // Provide feedback to the user (e.g., redirect or show a success message)
      //   history.push("/");
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div>
      <h1>{id ? "Update Student Form" : "Add Student Form"}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Student Name:
          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Course:
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Department:
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Remarks:
          <input
            type="text"
            name="remarks"
            value={formData.remarks}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">{id ? "Update" : "Submit"}</button>
      </form>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default StudentForm;
