import { Link } from "react-router-dom";
import "../styles/notfound.scss";

export default function NotFound() {
  return (
    <div className="notfound">
      <div className="notfound-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link to="/my-portfolio" className="home-btn">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
