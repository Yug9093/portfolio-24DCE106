import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import RepoList from "../components/RepoList";

function Projects() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRepositories = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://api.github.com/users/Yug9093/repos?sort=updated&per_page=6"
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch repositories (Status: ${response.status})`);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message || "Something went wrong while loading projects.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return (
    <div className="page">
      <h1>My Projects</h1>
      <p className="subtitle">
        Public GitHub repositories dynamically fetched via REST API.
      </p>

      {loading && <Spinner />}

      {!loading && error && (
        <ErrorMessage message={error} onRetry={fetchRepositories} />
      )}

      {!loading && !error && <RepoList data={data} />}
    </div>
  );
}

export default Projects;