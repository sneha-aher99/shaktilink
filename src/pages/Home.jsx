import React from "react";
import { useNavigate } from "react-router-dom"; // for navigation
import "../styles/home.css";

// Import images from assets
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";

function Home() {
  const navigate = useNavigate();
  const slides = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="title">
          Welcome to <span>ShaktiLink</span>
        </h1>
        <p className="subtitle">
          Work from Home, Empower Your Skills! <br />
          Find stitching, packaging, handcrafted art, food delivery, and more – jobs that fit your schedule.
        </p>

        {/* Sliding Images Below Welcome */}
        <div className="slider-container">
          <div className="slider-track">
            {slides.map((slide, index) => (
              <div key={index} className="slide">
                <img src={slide} alt={`slide-${index}`} />
              </div>
            ))}
            {/* Duplicate slides for infinite scroll */}
            {slides.map((slide, index) => (
              <div key={index + slides.length} className="slide">
                <img src={slide} alt={`slide-duplicate-${index}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Boxes Section */}
      <section className="features">
        <div className="feature-box job-box">
          <h2>Job Search</h2>
          <p>Find flexible and home-based job opportunities tailored for you.</p>
          <button onClick={() => navigate("/jobs")}>Explore Jobs</button>
        </div>

        <div className="feature-box tutorial-box">
          <h2>Tutorials</h2>
          <p>Learn new skills and gain confidence with easy step-by-step guides.</p>
          <button onClick={() => navigate("/tutorial")}>Start Learning</button>
        </div>

        <div className="feature-box community-box">
          <h2>Community</h2>
          <p>Connect with inspiring women and share your success stories.</p>
          <button onClick={() => navigate("/community")}>Join Community</button>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="stories-section">
        <h2>Success Stories</h2>
        <div className="stories-horizontal">
          <div className="story-card-horizontal">
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
              alt="Aarti"
            />
            <div className="story-text">
              <h3>Aarti, Nashik</h3>
              <p>
                “I started freelancing from home through ShaktiLink and now
                support my family proudly.”
              </p>
            </div>
          </div>

          <div className="story-card-horizontal">
            <img
              src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6"
              alt="Priya"
            />
            <div className="story-text">
              <h3>Priya, Pune</h3>
              <p>
                “Thanks to ShaktiLink tutorials, I learned online marketing and
                built my small business.”
              </p>
            </div>
          </div>

          <div className="story-card-horizontal">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
              alt="Kavita"
            />
            <div className="story-text">
              <h3>Kavita, Mumbai</h3>
              <p>
                “The ShaktiLink community motivated me to restart my career
                after a long break.”
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
