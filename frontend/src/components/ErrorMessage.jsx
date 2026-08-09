function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error-container">
      <div className="error-icon"></div>
      <h3>Failed to Load Repositories</h3>
      <p>{message || "An unexpected error occurred while fetching data."}</p>
      {onRetry && (
        <button type="button" className="retry-btn" onClick={onRetry}>
          Retry
        </button>
      )}
    </div>
  );
}

export default ErrorMessage;
