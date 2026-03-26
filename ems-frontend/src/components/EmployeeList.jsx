import { useEffect, useState } from "react";
import { listEmployees } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    listEmployees().then((res) => setEmployees(res.data));
  }, []);

  return (
    <div className="container mt-4 fade-in">
      <div className="card shadow">
        <div className="card-header bg-dark text-white d-flex justify-content-between">
          <h4>Employee Management</h4>
          <button className="btn btn-primary" onClick={() => navigate("/add")}>
            <FaPlus /> Add Employee
          </button>
        </div>

        <div className="card-body">
          <table className="table table-hover align-middle">
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {employees.map((emp) => (
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.firstName}</td>
                  <td>{emp.lastName}</td>
                  <td>{emp.email}</td>
                  <td>
                    <button
                      className="btn btn-outline-primary btn-sm me-2"
                      onClick={() => navigate(`/edit/${emp.id}`)}
                    >
                      <FaEdit /> Edit
                    </button>

                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => navigate(`/delete/${emp.id}`)}
                    >
                      <FaTrash /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EmployeeList;