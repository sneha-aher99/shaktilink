import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

export default function PostJob() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handlePostJob = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "jobs"), { title, description, createdAt: serverTimestamp() });
    alert("Job posted successfully!");
    setTitle(""); setDescription("");
  };

  return (
    <form onSubmit={handlePostJob}>
      <input placeholder="Job Title" value={title} onChange={e => setTitle(e.target.value)} />
      <textarea placeholder="Job Description" value={description} onChange={e => setDescription(e.target.value)} />
      <button type="submit">Post Job</button>
    </form>
  );
}
