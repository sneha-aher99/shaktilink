import React from "react";
import "../../styles/company.css";

function PostJob() {
  return (
    <div className="page-container">
      <h1>Post a Job</h1>
      <input type="text" placeholder="Job Title" />
      <textarea placeholder="Job Description"></textarea>
      <input type="text" placeholder="Location" />
      <button>Post Job</button>
    </div>
  );
}

export default PostJob;
