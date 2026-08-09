function RepoList({ data = [] }) {
  if (!data || data.length === 0) {
    return (
      <div className="no-data">
        <p>No repositories found.</p>
      </div>
    );
  }

  return (
    <div className="projects">
      {data.map((repo) => (
        <div className="project-card" key={repo.id}>
          <h2>{repo.name}</h2>
          <p>{repo.description || "Public repository hosted on GitHub."}</p>
          <div className="repo-meta">
            {repo.language && (
              <span className="repo-tag">
                {repo.language}
              </span>
            )}
          </div>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="repo-link"
          >
            View Repository ↗
          </a>
        </div>
      ))}
    </div>
  );
}

export default RepoList;
