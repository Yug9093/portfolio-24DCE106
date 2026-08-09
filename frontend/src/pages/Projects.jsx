function Projects() {
  return (
    <div className="page">
      <h1>My Projects</h1>

      <div className="projects">
        <div className="project-card">
          <h2>CampusConnect</h2>
          <p>
            A platform for managing college clubs and events.
          </p>
        </div>

        <div className="project-card">
          <h2>Student Portfolio</h2>
          <p>
            A responsive portfolio website created using React.
          </p>
        </div>

        <div className="project-card">
          <h2>Disease prediction using ML</h2>
          <p>
            A Python-based project for predicting disease in patients.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;