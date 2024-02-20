import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [students, setStudents] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/getAllForms"
        );
        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchStudents();
  }, []);

  const handleUpdate = (id) => {
    // Navigate to the update form for the specific student
    // (assuming your update form route is "/form/:id")
    window.location.href = `/form/${id}`;
  };

  const handleDelete = async (id) => {
    try {
      // Send a DELETE request to delete the student with the given ID
      await axios.delete(`http://localhost:3001/api/deleteForm/${id}`);

      // Update the state to remove the deleted student
      setStudents((prevStudents) =>
        prevStudents.filter((student) => student.id !== id)
      );

      console.log(`Student with ID ${id} deleted successfully`);
    } catch (error) {
      console.error(`Error deleting student with ID ${id}:`, error);
    }
  };

  const handleLogin = () => {
    window.location.href = "http://localhost:3001/api/auth/google/callback";
  };

  return (
    <div>
      <h1>Hello</h1>

      <>
        <h2>All Students forms:</h2>
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              {`Name: ${student.studentName}, Course: ${student.course}, Department: ${student.department}, Remarks: ${student.remarks}`}
              <button onClick={() => handleUpdate(student.id)}>Update</button>
              <button onClick={() => handleDelete(student.id)}>Delete</button>
            </li>
          ))}
        </ul>
        <Link to="/form">Add Student Form</Link>
      </>
      <button onClick={handleLogin}>Log in with Google</button>
    </div>
  );
};

export default Home;
