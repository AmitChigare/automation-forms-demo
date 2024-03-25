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
    approvalRequired: ["Not Submitted", "FA", "HOD", "Dean"],
    currentStatus: 0,
    currentApprovalPerson: "Not Submitted", // Initially set to Not Submitted
  });

  const [approvalStatus, setApprovalStatus] = useState({
    currentStatus: 0, // 0: Not Submitted, 1: Person 1, 2: Person 2, 3: Person 3
    approvalRequired: ["Not Submitted", "FA", "HOD", "Dean"],
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Update approval status and determine the next approvalRequired
    const nextStatus = 1;
    const nextApprovalPerson = formState.approvalRequired[nextStatus];
    const updatedFormState = {
      ...formState,
      currentStatus: nextStatus,
      currentApprovalPerson: nextApprovalPerson,
    };

    try {
      // Post the updated form state to the backend
      const response = await axios.post(
        "http://localhost:8888/api/formC1/",
        updatedFormState
      );
      console.log("Form submitted with data:", updatedFormState);
      console.log("Response:", response.data);
      // Update the form state with the new currentStatus and currentApprovalPerson
      setFormState(updatedFormState);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
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
