// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// User Pages
import Jobs from "./pages/User/Jobs";
import Tutorial from "./pages/User/Tutorial";
import Community from "./pages/User/Community";
import Stories from "./pages/User/Stories";

// Company Pages
import Dashboard from "./pages/Company/Dashboard";
import PostJob from "./pages/Company/PostJob";
import ManageJobs from "./pages/Company/ManageJobs";
import Applicants from "./pages/Company/Applicants";
import Profile from "./pages/Company/Profile";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* User Protected Routes */}
          <Route
            path="/jobs"
            element={
              <ProtectedRoute allowedRoles={["user"]}>
                <Jobs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tutorial"
            element={
              <ProtectedRoute allowedRoles={["user"]}>
                <Tutorial />
              </ProtectedRoute>
            }
          />
          <Route
            path="/community"
            element={
              <ProtectedRoute allowedRoles={["user"]}>
                <Community />
              </ProtectedRoute>
            }
          />
          <Route
            path="/stories"
            element={
              <ProtectedRoute allowedRoles={["user"]}>
                <Stories />
              </ProtectedRoute>
            }
          />

          {/* Company Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute allowedRoles={["company"]}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/post-job"
            element={
              <ProtectedRoute allowedRoles={["company"]}>
                <PostJob />
              </ProtectedRoute>
            }
          />
          <Route
            path="/manage-jobs"
            element={
              <ProtectedRoute allowedRoles={["company"]}>
                <ManageJobs />
              </ProtectedRoute>
            }
          />
          <Route
            path="/applicants"
            element={
              <ProtectedRoute allowedRoles={["company"]}>
                <Applicants />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute allowedRoles={["company"]}>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
