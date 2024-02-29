import React, { useState } from "react";
import formHeader from "./../assets/form-header.png";

const FormC5 = () => {
  const [personalInfo, setPersonalInfo] = useState({
    studentName: "Amit Chigare",
    email: "ec20b1071@iiitdm.ac.in",
    rollNumber: "EC20B1071",
    branch: "ECE",
    department: "ECE",
  });

  const [courses, setCourses] = useState([
    {
      courseCode: "",
      courseName: "",
      chosenCategory: "",
      changeCategory: "",
      reason: "",
    },
  ]);

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleCourseChange = (index, field, value) => {
    const updatedCourses = [...courses];
    updatedCourses[index][field] = value;
    setCourses(updatedCourses);
  };

  const addCourse = (e) => {
    e.preventDefault();
    const newCourse = {
      courseCode: "",
      courseName: "",
      chosenCategory: "",
      changeCategory: "",
      reason: "",
    };
    setCourses([...courses, newCourse]);
  };

  const removeCourse = (e) => {
    e.preventDefault();
    if (courses.length > 1) {
      const updatedCourses = [...courses];
      updatedCourses.pop();
      setCourses(updatedCourses);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your submission logic here with the collected data
    console.log("Form submitted with data:", {
      personalInfo,
      courses,
    });
  };

  return (
    <div
      className="bg-gray-200 w-full p-5 flex justify-center items-center"
      style={{ width: "98vw" }}
    >
      <div className="bg-white rounded shadow-lg p-10">
        <h1 className="text-center text-2xl font-bold underline mb-2">
          Form C5
        </h1>
        <div className="pb-5 border-b border-gray-400">
          <img className="w-100 h-full" src={formHeader} alt="" />
        </div>
        <form className="border-b border-gray-400" onSubmit={handleSubmit}>
          <div className="space-y-12 py-10">
            <div className="border-b border-gray-900/10">
              <h2 className="text-base font-semibold text-gray-900 text-center">
                PROFORMA FOR CHANGE OF CATEGORY OF ELECTIVE COURSES
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
                  2) List of elective courses for which change is requested:
                </h2>
                <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                  {courses.map((course, index) => (
                    <div
                      key={index}
                      className="sm:col-span-3 pb-5 border-b border-gray-900"
                    >
                      {/* Course Code */}
                      <label
                        htmlFor={`courseCode-${index}`}
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Course Code {index + 1}
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          required
                          name={`courseCode-${index}`}
                          id={`courseCode-${index}`}
                          value={course.courseCode}
                          onChange={(e) =>
                            handleCourseChange(
                              index,
                              "courseCode",
                              e.target.value
                            )
                          }
                          className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>

                      {/* Course Name */}
                      <label
                        htmlFor={`courseName-${index}`}
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Course Name {index + 1}
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          required
                          name={`courseName-${index}`}
                          id={`courseName-${index}`}
                          value={course.courseName}
                          onChange={(e) =>
                            handleCourseChange(
                              index,
                              "courseName",
                              e.target.value
                            )
                          }
                          className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>

                      {/* Chosen Category */}
                      <label
                        htmlFor={`chosenCategory-${index}`}
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Chosen Category {index + 1}
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          required
                          name={`chosenCategory-${index}`}
                          id={`chosenCategory-${index}`}
                          value={course.chosenCategory}
                          onChange={(e) =>
                            handleCourseChange(
                              index,
                              "chosenCategory",
                              e.target.value
                            )
                          }
                          className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>

                      {/* Change Category */}
                      <label
                        htmlFor={`changeCategory-${index}`}
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Change Category {index + 1}
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          required
                          name={`changeCategory-${index}`}
                          id={`changeCategory-${index}`}
                          value={course.changeCategory}
                          onChange={(e) =>
                            handleCourseChange(
                              index,
                              "changeCategory",
                              e.target.value
                            )
                          }
                          className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>

                      {/* Reason */}
                      <label
                        htmlFor={`reason-${index}`}
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Reason {index + 1}
                      </label>
                      <div className="mt-2">
                        <textarea
                          id={`reason-${index}`}
                          required
                          name={`reason-${index}`}
                          value={course.reason}
                          onChange={(e) =>
                            handleCourseChange(index, "reason", e.target.value)
                          }
                          rows={3}
                          className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="sm:col-span-3 mt-5">
                <button
                  className="my-4 mr-5 bg-indigo-500 text-white px-3 py-1 rounded-md"
                  onClick={addCourse}
                >
                  Add Course
                </button>
                <button
                  className="my-4 bg-red-500 text-white px-3 py-1 rounded-md"
                  onClick={removeCourse}
                >
                  Remove Course
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

export default FormC5;
