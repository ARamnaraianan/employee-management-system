import axios from "axios";

const BASE_URL = "http://localhost:8080/api/employees";

export const listEmployees = () => axios.get(BASE_URL);

export const addEmployee = (employee) => axios.post(BASE_URL, employee);

export const getEmployee = (id) => axios.get(`${BASE_URL}/${id}`);

export const editEmployee = (id, employee) =>
    axios.put(`${BASE_URL}/${id}`, employee);

export const removeEmployee = (id) =>
    axios.delete(`${BASE_URL}/${id}`);