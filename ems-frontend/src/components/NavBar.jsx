import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark shadow-sm">
      <div className="container d-flex justify-content-between align-items-center">
        <h4 className="text-white m-0">
          <FaUsers className="me-2" />
          EMS Dashboard
        </h4>

        <div>
          <Link to="/" className="btn btn-outline-light me-2">
            Home
          </Link>
          <Link to="/add" className="btn btn-primary">
            Add Employee
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;