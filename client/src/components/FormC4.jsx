import React, { useState } from "react";
import formHeader from "./../assets/form-header.png";

const FormC4 = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your submission logic here with the collected data
    console.log("Form submitted with data:", {
      personalInfo,
      academicPerformance,
    });
  };

  return (
    <div
      className="bg-gray-200 w-full p-5 flex justify-center items-center"
      style={{ width: "98vw" }}
    >
      <div className="bg-white rounded shadow-lg p-10" style={{ width: "70%" }}>
        <h1 className="text-center text-2xl font-bold underline mb-2">
          Form C4
        </h1>
        <div className="flex justify-center pb-5 border-b border-gray-400">
          <img className="w-100 h-full" src={formHeader} alt="" />
        </div>

        <form className="border-b border-gray-400" onSubmit={handleSubmit}>
          <div className="space-y-12 py-10">
            <div className="border-b border-gray-900/10">
              <h2 className="text-base font-semibold text-gray-900 text-center">
                PROFORMA FOR REGISTERING B. TECH (HONOURS) PROGRAMME
              </h2>
              <p className="text-center text-sm leading-6 text-gray-600">
                (Offered by the Parent Department)
              </p>

              <div className="mt-10">
                <h2 className="mb-2 text-base font-bold text-gray-900">
                  1) Details of the student:
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
                <h2 className="mb-2 text-base font-bold text-gray-900">
                  2) Academic Performance
                </h2>
                <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="cgpa"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      CGPA up to Semester 4
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
                      (Attach Semester 1 to 4 Grade Cards)
                    </p>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="backlog-details"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Details of Backlogs, if any (Grade I, U, W)
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
                  </div>
                </div>
              </div>

              <p className="my-5 text-sm leading-6 text-gray-600">
                I am willing to take B. Tech(Honours) programme from the forth
                coming Semester. I will abide by the rules & regulations of the
                Institute about this programme.
              </p>
            </div>

            <button
              type="submit"
              className="my-4 bg-green-500 text-white px-4 py-2 rounded-md"
            >
              Submit
            </button>
          </div>
        </form>

        <h3 className="my-5 text-center font-bold text-gray-900">
          Rules and Regulations Approved by the Senate: (As per the Senate-
          40,46)
        </h3>
        <ol>
          <li>
            1) CGPA at the end of 4th semester should be at least 9.0 with no
            backlogs.
          </li>
          <li>
            2) In order to successfully complete Honours programme, a student is
            expected to earn 12 credits by crediting 3 In-house courses of 4
            credits each.
          </li>
          <li>
            3) Those who register for B. Tech (Honours) must maintain a CGPA of
            at least 9.0 at the end of every semester starting from the 4 th
            semester.
          </li>
          <li>
            4) The student shall lose the chance of pursuing the Honours
            programme if he/she earns E/U/W in any of the courses registered
            under Honours programme.
          </li>
        </ol>

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

export default FormC4;
