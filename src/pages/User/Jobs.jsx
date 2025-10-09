import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export default function Jobs() {
  // Demo jobs data
  const [jobs] = useState([
    { id: 1, title: "Frontend Developer", company: "TechCorp", location: "Mumbai", type: "Full-time" },
    { id: 2, title: "Graphic Designer", company: "DesignHub", location: "Pune", type: "Part-time" },
    { id: 3, title: "Content Writer", company: "WriteRight", location: "Remote", type: "Freelance" },
    { id: 4, title: "Data Analyst", company: "DataSolve", location: "Bangalore", type: "Full-time" },
  ]);

  return (
    <div className="jobs-container">
      <h1>Available Jobs</h1>
      <div className="jobs-list">
        {jobs.map((job) => (
          <div className="job-card" key={job.id}>
            <h2>{job.title}</h2>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Type:</strong> {job.type}</p>
            <button>Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}