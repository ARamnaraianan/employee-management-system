import { useState } from "react";
import { addEmployee } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AddEmployee() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const saveEmployee = (e) => {
    e.preventDefault();
    addEmployee({ firstName, lastName, email }).then(() => {
      toast.success("Employee Added Successfully!");
      navigate("/");
    });
  };

  return (
    <div className="add-page fade-in">
      <div className="add-container">
        <div className="left-side">
          <h2>Add Employee</h2>
        </div>

        <div className="right-side">
          <form onSubmit={saveEmployee}>
            <input
              type="text"
              placeholder="First Name"
              className="form-control mb-3"
              onChange={(e) => setFirstName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Last Name"
              className="form-control mb-3"
              onChange={(e) => setLastName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Email"
              className="form-control mb-3"
              onChange={(e) => setEmail(e.target.value)}
            />

            <button className="btn btn-primary w-100">Save</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;