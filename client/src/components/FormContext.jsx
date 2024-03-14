// FormContext.js
import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [formState, setFormState] = useState({
    personalInfo: {
      studentName: "Amit Chigare",
      email: "ec20b1071@iiitdm.ac.in",
      rollNumber: "EC20B1071",
      branch: "ECE",
      department: "ECE",
    },
    academicPerformance: {
      cgpa: "",
      backlogDetails: "",
    },
    programs: ["Programme 1"],
  });

  const [approvalStatus, setApprovalStatus] = useState({
    currentStatus: 0, // 0: Not Submitted, 1: Person 1, 2: Person 2, 3: Person 3
    approvalRequired: ["Not Submitted", "Person 1", "Person 2", "Person 3"],
  });

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [name]: value },
    }));
  };

  const handleAcademicPerformanceChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      academicPerformance: { ...prev.academicPerformance, [name]: value },
    }));
  };

  const handleProgramChange = (index, value) => {
    const updatedPrograms = [...formState.programs];
    updatedPrograms[index] = value;
    setFormState((prev) => ({ ...prev, programs: updatedPrograms }));
  };

  const addProgram = () => {
    const newProgram = `Programme ${formState.programs.length + 1}`;
    setFormState((prev) => ({
      ...prev,
      programs: [...prev.programs, newProgram],
    }));
  };

  const removeProgram = () => {
    if (formState.programs.length > 1) {
      const updatedPrograms = [...formState.programs];
      updatedPrograms.pop();
      setFormState((prev) => ({ ...prev, programs: updatedPrograms }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Update approval status and determine the next approvalRequired
    const nextStatus = approvalStatus.currentStatus + 1;
    const updatedApprovalStatus = {
      currentStatus: nextStatus,
      approvalRequired: approvalStatus.approvalRequired[nextStatus],
    };

    axios.post("http://localhost:8888/api/formC1", formState);

    // Perform your submission logic here with the collected data
    console.log("Form submitted with data:", formState);

    // Make a POST request to your PHP backend
    // fetch("http://your-backend-url/submit_form.php", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formState),
    // })
    //   .then((response) => {
    //     if (response.ok) {
    //       // Assuming you have a function to update the approvalStatus state
    //       setApprovalStatus(updatedApprovalStatus);
    //       console.log("Form data saved successfully.");
    //     } else {
    //       throw new Error("Failed to save form data.");
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  };

  return (
    <FormContext.Provider
      value={{
        formState,
        approvalStatus,
        handlePersonalInfoChange,
        handleAcademicPerformanceChange,
        handleProgramChange,
        addProgram,
        removeProgram,
        handleSubmit,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
