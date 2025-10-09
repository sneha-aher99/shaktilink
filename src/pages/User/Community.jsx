// src/pages/User/Community.jsx
import React, { useEffect, useState } from "react";
import { db, auth } from "../../firebase";
import { collection, addDoc, getDocs, serverTimestamp } from "firebase/firestore";
import "../../styles/user.css";

const Community = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      const postsCollection = collection(db, "community");
      const postsSnapshot = await getDocs(postsCollection);
      const postsList = postsSnapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        .sort((a, b) => b.createdAt?.seconds - a.createdAt?.seconds); // newest first
      setPosts(postsList);
    };
    fetchPosts();
  }, []);

  const handlePost = async (e) => {
    e.preventDefault();
    if (!newPost.trim()) return;

    await addDoc(collection(db, "community"), {
      message: newPost,
      userEmail: auth.currentUser?.email || "Anonymous",
      createdAt: serverTimestamp(),
    });

    setNewPost("");
    window.location.reload(); // simple refresh to show latest posts
  };

  return (
    <div className="user-page-container">
      <h1>Community</h1>
      <form className="community-form" onSubmit={handlePost}>
        <textarea
          placeholder="Share your thoughts or ask questions..."
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          required
        />
        <button type="submit">Post</button>
      </form>
      <div className="community-posts">
        {posts.length === 0 ? (
          <p>No posts yet. Be the first to share!</p>
        ) : (
          posts.map(post => (
            <div key={post.id} className="community-post">
              <p>{post.message}</p>
              <span>— {post.userEmail}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Community;
