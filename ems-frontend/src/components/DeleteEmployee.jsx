import { removeEmployee, getEmployee } from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function DeleteEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    getEmployee(id).then((res) => setEmployee(res.data));
  }, [id]);

  const deleteEmp = () => {
    removeEmployee(id).then(() => {
      toast.error("Employee Deleted!");
      navigate("/");
    });
  };

  return (
    <div className="container mt-5 fade-in">
      <div className="card shadow p-4">
        <h4>Are you sure you want to delete?</h4>
        <p>{employee.firstName} {employee.lastName}</p>

        <button className="btn btn-danger me-2" onClick={deleteEmp}>
          Yes Delete
        </button>
        <button className="btn btn-secondary" onClick={() => navigate("/")}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default DeleteEmployee;