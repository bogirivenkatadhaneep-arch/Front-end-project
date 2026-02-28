import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="card">
      <h2>Page Not Found</h2>
      <p>The page you requested does not exist.</p>
      <Link className="button-link" to="/">
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFoundPage;