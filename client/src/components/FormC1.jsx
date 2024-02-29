import React, { useState } from "react";
import formHeader from "./../assets/form-header.png";

const FormC1 = () => {
  const [personalInfo, setPersonalInfo] = useState({
    studentName: "Amit Chigare",
    email: "ec20b1071@iiitdm.ac.in",
    rollNumber: "EC20B1071",
    branch: "ECE",
    department: "ECE",
  });

  const [academicPerformance, setAcademicPerformance] = useState({
    cgpa: "",
    backlogDetails: "",
  });

  const [programs, setPrograms] = useState(["Programme 1"]);

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleAcademicPerformanceChange = (e) => {
    const { name, value } = e.target;
    setAcademicPerformance((prevPerformance) => ({
      ...prevPerformance,
      [name]: value,
    }));
  };

  const handleProgramChange = (index, value) => {
    const updatedPrograms = [...programs];
    updatedPrograms[index] = value;
    setPrograms(updatedPrograms);
  };

  const addProgram = (e) => {
    e.preventDefault();
    const newProgram = `Programme ${programs.length + 1}`;
    setPrograms([...programs, newProgram]);
  };
  const removeProgram = (e) => {
    e.preventDefault();
    if (programs.length > 2) {
      const updatedPrograms = [...programs];
      updatedPrograms.pop();
      setPrograms(updatedPrograms);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your submission logic here with the collected data
    console.log("Form submitted with data:", {
      personalInfo,
      academicPerformance,
      programs,
    });
  };

  return (
    <div
      className="bg-gray-200 w-full p-5 flex justify-center items-center"
      style={{ width: "98vw" }}
    >
      <div className="bg-white rounded shadow-lg p-10">
        <h1 className="text-center text-2xl font-bold underline mb-2">
          Form C1
        </h1>
        <div className="pb-5 border-b border-gray-400">
          <img className="w-100 h-full" src={formHeader} alt="" />
        </div>
        <form className="border-b border-gray-400" onSubmit={handleSubmit}>
          <div className="space-y-12 py-10">
            <div className="border-b border-gray-900/10">
              <h2 className="text-base font-semibold text-gray-900 text-center">
                PROFORMA FOR CHANGE OF PROGRAM UNDER BRANCH TRANSFER
              </h2>

              <div className="mt-10">
                <h2 className="text-base font-bold text-gray-900">
                  1) Personal Information
                </h2>
                <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="student-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Name of the Student
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        disabled
                        name="student-name"
                        id="student-name"
                        value={personalInfo.studentName}
                        onChange={handlePersonalInfoChange}
                        className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-gray-200 cursor-not-allowed"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Email
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        disabled
                        name="email"
                        id="email"
                        value={personalInfo.email}
                        onChange={handlePersonalInfoChange}
                        className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  bg-gray-200 cursor-not-allowed"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="roll-number"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Roll Number
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        disabled
                        name="roll-number"
                        id="roll-number"
                        value={personalInfo.rollNumber}
                        onChange={handlePersonalInfoChange}
                        className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  bg-gray-200 cursor-not-allowed"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="branch"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Branch
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        disabled
                        name="branch"
                        id="branch"
                        value={personalInfo.branch}
                        onChange={handlePersonalInfoChange}
                        className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  bg-gray-200 cursor-not-allowed"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="department"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Department
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        disabled
                        name="department"
                        id="department"
                        value={personalInfo.department}
                        onChange={handlePersonalInfoChange}
                        className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  bg-gray-200 cursor-not-allowed"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-base font-bold text-gray-900">
                  2) Academic Performance
                </h2>
                <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="cgpa"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      CGPA
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        required
                        name="cgpa"
                        id="cgpa"
                        value={academicPerformance.cgpa}
                        onChange={handleAcademicPerformanceChange}
                        className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                      />
                    </div>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      (Attach Semester 1 Grade Card)
                    </p>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="backlog-details"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Details of Backlogs, if any
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="backlog-details"
                        required
                        name="backlogDetails"
                        value={academicPerformance.backlogDetails}
                        onChange={handleAcademicPerformanceChange}
                        rows={3}
                        className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      (Students with less than 8.5 CGPA and backlogs are not
                      eligible to apply for branch transfer)
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-base font-bold text-gray-900">
                  3) List of programme requested under branch transfer (in order
                  of increasing priority):
                </h2>
                <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                  {programs.map((program, index) => (
                    <div key={index} className="sm:col-span-3">
                      <label
                        htmlFor={`programme-${index + 1}`}
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        {program}
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          required
                          name={`programme-${index + 1}`}
                          id={`programme-${index + 1}`}
                          value={programs[index]}
                          onChange={(e) =>
                            handleProgramChange(index, e.target.value)
                          }
                          className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="sm:col-span-3 mt-5">
                <button
                  className="my-4 mr-5 bg-indigo-500 text-white px-3 py-1 rounded-md"
                  onClick={addProgram}
                >
                  Add Programme
                </button>
                <button
                  className="my-4 bg-red-500 text-white px-3 py-1 rounded-md"
                  onClick={removeProgram}
                >
                  Remove Programme
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="my-4 bg-green-500 text-white px-4 py-2 rounded-md"
            >
              Submit
            </button>
          </div>
        </form>
        <h2 className="font-bold my-5">
          Approval Status: <span className="text-gray-400">Not Sumitted</span>
        </h2>
        <h2 className="font-bold my-5">
          Remarks: <span className="text-gray-400">No Remarks</span>
        </h2>
      </div>
    </div>
  );
};

export default FormC1;
