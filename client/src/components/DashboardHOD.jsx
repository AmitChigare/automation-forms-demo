import { useEffect, useState } from "react";
import axios from "axios";

const DashboardHOD = () => {
  const Person = "HOD";
  const [forms, setForms] = useState([]);
  const [errors, setErrors] = useState(null);

  const fetchForms = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8888/api/hodAllForms/"
      );
      setForms(response.data);
    } catch (error) {
      console.error("Error fetching forms:", error);
    }
  };

  const handleApprove = async (formId) => {
    try {
      const response = await axios.post(
        `http://localhost:8888/api/hodApproval/`,
        { action: "approve", formId: formId, person: Person } // Include the action field in the request payload
      );
      console.log("Form approved successfully:", response.data);
      // Fetch updated forms after approval
      fetchForms();
    } catch (error) {
      console.error("Error approving form:", error.response.data);
      setErrors(error.response.data);
    }
  };

  const handleReject = async (formId) => {
    try {
      const response = await axios.post(
        `http://localhost:8888/api/hodApproval/`,
        { action: "reject", formId: formId, person: Person } // Include the action field in the request payload
      );
      console.log("Form rejected successfully:", response.data);
      // Fetch updated forms after rejection
      fetchForms();
    } catch (error) {
      console.error("Error rejecting form:", error.response.data);
    }
  };

  useEffect(() => {
    fetchForms();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">DashboardFA</h1>
      <div className="overflow-x-scroll">
        {errors ? (
          <p>{errors}</p>
        ) : (
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">Form ID</th>
                <th className="border border-gray-300 px-4 py-2">Form Name</th>
                <th className="border border-gray-300 px-4 py-2">
                  Student Name
                </th>
                <th className="border border-gray-300 px-4 py-2">Email</th>
                <th className="border border-gray-300 px-4 py-2">
                  Roll Number
                </th>
                <th className="border border-gray-300 px-4 py-2">Department</th>
                <th className="border border-gray-300 px-4 py-2">CGPA</th>
                <th className="border border-gray-300 px-4 py-2">
                  Backlog Details
                </th>
                <th className="border border-gray-300 px-4 py-2">Programs</th>
                <th className="border border-gray-300 px-4 py-2">
                  Current Status
                </th>
                <th className="border border-gray-300 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {forms.map((form) => (
                <tr key={form.id}>
                  <td className="border border-gray-300 px-4 py-2">
                    {form.id}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {form.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {form.studentName}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {form.email}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {form.rollNumber}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {form.department}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {form.cgpa}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {form.backlogDetails}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {form.programs}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {form.currentStatus === 0
                      ? "Not Submitted by student"
                      : "Submitted by student"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <div>
                      <button
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mr-2"
                        onClick={() => handleApprove(form.id)}
                        //   disabled={{
                        //     ...(form.currentApprovalPerson === Person
                        //       ? true
                        //       : false),
                        //   }}
                      >
                        Approve
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                        onClick={() => handleReject(form.id)}
                        //   disabled={{ ...(form.currentStatus <= 0 ? true : false) }}
                      >
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default DashboardHOD;
