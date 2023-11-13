import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="flex flex-row justify-end">
        <Link to="/" className="mx-2">
          Home
        </Link>
        <Link to="/about" className="mx-2">
          About
        </Link>
        <Link to="/contact" className="mx-2">
          Contact
        </Link>
      </nav>
    </div>
  );
}
