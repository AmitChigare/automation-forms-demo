const express = require("express");
const router = express.Router();
const passport = require("passport");

module.exports = (StudentFormModel) => {
  // Create Student Form
  router.post("/api/addForm", async (req, res) => {
    const { studentName, course, department, remarks } = req.body;

    try {
      // Create a new student record in the database
      const newStudent = await StudentFormModel.create({
        studentName,
        course,
        department,
        remarks,
      });

      console.log("Data inserted successfully!");
      res.json({ success: true, student: newStudent });
    } catch (error) {
      console.error("Error inserting data into MySQL:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // Fetch all students from the database
  router.get("/api/getAllForms", async (req, res) => {
    try {
      const allStudents = await StudentFormModel.findAll();
      res.json(allStudents);
    } catch (error) {
      console.error("Error fetching data from MySQL:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // Fetch student by ID
  router.get("/api/getForm/:id", async (req, res) => {
    const studentId = req.params.id;

    try {
      const student = await StudentFormModel.findByPk(studentId);

      if (student) {
        res.json(student);
      } else {
        res.status(404).json({ success: false, message: "Student not found" });
      }
    } catch (error) {
      console.error("Error fetching student by ID:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // Update student by ID
  router.put("/api/updateForm/:id", async (req, res) => {
    const studentId = req.params.id;
    const { studentName, course, department, remarks } = req.body;

    try {
      const updatedStudent = await StudentFormModel.update(
        { studentName, course, department, remarks },
        { where: { id: studentId } }
      );

      if (updatedStudent[0] === 1) {
        res.json({ success: true, message: "Student updated successfully" });
      } else {
        res.status(404).json({ success: false, message: "Student not found" });
      }
    } catch (error) {
      console.error("Error updating student:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  // Delete student by ID
  router.delete("/api/deleteForm/:id", async (req, res) => {
    const studentId = req.params.id;

    try {
      const deletedStudent = await StudentFormModel.destroy({
        where: { id: studentId },
      });

      if (deletedStudent === 1) {
        res.json({ success: true, message: "Student deleted successfully" });
      } else {
        res.status(404).json({ success: false, message: "Student not found" });
      }
    } catch (error) {
      console.error("Error deleting student:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

  return router;
};
