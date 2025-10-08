// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom"; // import Routes & Route
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import all pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

// Optional: User pages
import Jobs from "./pages/User/Jobs";
import Tutorial from "./pages/User/Tutorial";
import Community from "./pages/User/Community";
import Stories from "./pages/User/Stories";

// Optional: Company pages
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
          {/* Public Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* User Pages */}
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/community" element={<Community />} />
          <Route path="/stories" element={<Stories />} />

          {/* Company Pages */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/post-job" element={<PostJob />} />
          <Route path="/manage-jobs" element={<ManageJobs />} />
          <Route path="/applicants" element={<Applicants />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
