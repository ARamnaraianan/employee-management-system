import { useEffect, useState } from "react";
import { getEmployee, editEmployee } from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function UpdateEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getEmployee(id).then((res) => {
      setFirstName(res.data.firstName);
      setLastName(res.data.lastName);
      setEmail(res.data.email);
    });
  }, [id]);

  const updateEmployee = (e) => {
    e.preventDefault();
    editEmployee(id, { firstName, lastName, email }).then(() => {
      toast.info("Employee Updated Successfully!");
      navigate("/");
    });
  };

  return (
    <div className="add-page fade-in">
      <div className="add-container">
        <div className="left-side update-bg">
          <h2>Update Employee</h2>
        </div>

        <div className="right-side">
          <form onSubmit={updateEmployee}>
            <input
              type="text"
              className="form-control mb-3"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <input
              type="text"
              className="form-control mb-3"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            <input
              type="email"
              className="form-control mb-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button className="btn btn-warning w-100">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateEmployee;