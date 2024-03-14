import React, { useState } from "react";

const Person1Dashboard = ({ formState, approvalStatus }) => {
  const [approvalStatu, setApprovalStatus] = useState(approvalStatus);
  return (
    <>
      <h2>Person 1's Dashboard</h2>
      {/* Display submitted form details */}
      <div>
        <p>
          Form submitted by {formState.personalInfo.studentName}(
          {formState.personalInfo.rollNumber})
        </p>
        {/* Add more details as needed */}
      </div>
      <button onClick={() => setApprovalStatus(2)}>Approve Form</button>
    </>
  );
};

export default Person1Dashboard;
