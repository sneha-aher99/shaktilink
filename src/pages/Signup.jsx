import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";
import "../styles/forms.css";

export default function Signup() {
  const navigate = useNavigate();

  const [role, setRole] = useState(""); // "user" or "company"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // User Fields
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [skills, setSkills] = useState("");

  // Company Fields
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [website, setWebsite] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (role === "user") {
        await setDoc(doc(db, "users", user.uid), {
          email,
          role,
          name,
          age,
          skills,
          createdAt: new Date(),
        });
        navigate("/"); // redirect to homepage or user dashboard
      } else if (role === "company") {
        await setDoc(doc(db, "users", user.uid), {
          email,
          role,
          companyName,
          industry,
          website,
          createdAt: new Date(),
        });
        navigate("/company/dashboard"); // ✅ redirect to company dashboard
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        {/* Role Selection */}
        <div>
          <label>
            <input
              type="radio"
              value="user"
              checked={role === "user"}
              onChange={(e) => setRole(e.target.value)}
            />
            User (Housewife)
          </label>
          <label>
            <input
              type="radio"
              value="company"
              checked={role === "company"}
              onChange={(e) => setRole(e.target.value)}
            />
            Company
          </label>
        </div>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* User fields */}
        {role === "user" && (
          <>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Skills"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            />
          </>
        )}

        {/* Company fields */}
        {role === "company" && (
          <>
            <input
              type="text"
              placeholder="Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Industry"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Website or Contact"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </>
        )}

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
