import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default function Profile() {
  const { currentUser } = useAuth();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      if (currentUser?.uid) {
        const docRef = doc(db, "companies", currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) setProfile(docSnap.data());
      }
    };
    fetchProfile();
  }, [currentUser]);

  if (!profile) return <p>Loading...</p>;

  return (
    <div>
      <h2>Company Profile</h2>
      <p><strong>Company Name:</strong> {profile.companyName}</p>
      <p><strong>Industry:</strong> {profile.industry}</p>
      <p><strong>Website:</strong> {profile.website}</p>
    </div>
  );
}
