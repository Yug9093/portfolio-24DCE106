import { useState } from "react";
import About from "../components/About";
import Skills from "../components/Skills";

function Home() {
  const [activeSection, setActiveSection] = useState("about");

  const about =
    "I am a Computer Engineering student passionate about AI, Machine Learning, Data Science and Web Development.";

  const skills = ["Python", "Data Science", "AI", "JavaScript", "MySQL"];

  return (
    <div className="home-shell">
      <div className="home-header">
        <h1>Welcome to My Portfolio</h1>
        <p>Computer Engineering student focused on building simple, useful web experiences.</p>

        <div className="section-tabs" role="tablist" aria-label="Profile sections">
          <button
            type="button"
            className={activeSection === "about" ? "tab-btn is-active" : "tab-btn"}
            onClick={() => setActiveSection("about")}
          >
            About
          </button>

          <button
            type="button"
            className={activeSection === "skills" ? "tab-btn is-active" : "tab-btn"}
            onClick={() => setActiveSection("skills")}
          >
            Skills
          </button>
        </div>
      </div>

      {activeSection === "about" ? (
        <About aboutText={about} />
      ) : (
        <Skills skillList={skills} />
      )}
    </div>
  );
}

export default Home;