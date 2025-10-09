import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        Company Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {/* Card 1: Post Job */}
        <div
          onClick={() => navigate("/post-job")}
          className="cursor-pointer bg-white shadow-lg rounded-xl p-5 text-center hover:shadow-2xl transition"
        >
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Post Job</h2>
          <p className="text-gray-500 text-sm">Create and publish new job openings</p>
        </div>

        {/* Card 2: Manage Jobs */}
        <div
          onClick={() => navigate("/manage-jobs")}
          className="cursor-pointer bg-white shadow-lg rounded-xl p-5 text-center hover:shadow-2xl transition"
        >
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Manage Jobs</h2>
          <p className="text-gray-500 text-sm">Edit or remove your posted jobs</p>
        </div>

        {/* Card 3: Applicants */}
        <div
          onClick={() => navigate("/applicants")}
          className="cursor-pointer bg-white shadow-lg rounded-xl p-5 text-center hover:shadow-2xl transition"
        >
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Applicants</h2>
          <p className="text-gray-500 text-sm">View candidates who applied</p>
        </div>

        {/* Card 4: Profile */}
        <div
          onClick={() => navigate("/profile")}
          className="cursor-pointer bg-white shadow-lg rounded-xl p-5 text-center hover:shadow-2xl transition"
        >
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Profile</h2>
          <p className="text-gray-500 text-sm">View and update your company profile</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
