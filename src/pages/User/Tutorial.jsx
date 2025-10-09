// src/pages/User/Tutorial.jsx
import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import "../../styles/user.css";

export default function Tutorial() {
  const [tutorials] = useState([
    { id: 1, title: "React Basics", author: "Sneha Aher", duration: "1h 30m" },
    { id: 2, title: "Firebase Authentication", author: "John Doe", duration: "45m" },
    { id: 3, title: "JavaScript ES6 Features", author: "Jane Smith", duration: "50m" },
    { id: 4, title: "CSS Flexbox & Grid", author: "Sneha Aher", duration: "1h" },
  ]);

  return (
    <div className="tutorial-container">
      <h1>Tutorials</h1>
      <div className="tutorial-list">
        {tutorials.map((tutorial) => (
          <div className="tutorial-card" key={tutorial.id}>
            <h2>{tutorial.title}</h2>
            <p><strong>Author:</strong> {tutorial.author}</p>
            <p><strong>Duration:</strong> {tutorial.duration}</p>
            <button>Watch Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}